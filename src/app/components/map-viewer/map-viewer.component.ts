import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet'

import { ItemCardComponent } from '../item-card/item-card.component';

import { ItemListComponent } from '../../components/item-list/item-list.component';
import { ModalMapItemListComponent } from '../../components/modal-map-item-list/modal-map-item-list.component';

@Component({
  selector: 'app-map-viewer',
  standalone: true,
  imports: [ItemCardComponent, ItemListComponent, ModalMapItemListComponent],
  templateUrl: './map-viewer.component.html',
  styleUrl: './map-viewer.component.scss'
})export class MapViewerComponent implements OnInit {
  map: any;

  ngOnInit(): void {
    this.configMap();
  }

  configMap() {
    this.map = L.map('map', {
      center: [-15.3126104, -53.4507723],
      minZoom: 4,
      maxBounds: [
        [-33.75, -73.99],
        [5.25, -34.79]
      ],
      maxBoundsViscosity: 1.0,
      preferCanvas: true,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    L.control.zoom({
      position: 'bottomright'
    }).addTo(this.map);

    const icon = L.icon({
      iconUrl: '../../../assets/pin.png',
      shadowUrl: '../../../assets/pin-shadow.png',
      iconSize: [30, 38],
      iconAnchor: [15, 40],
      shadowSize: [30, 38],
      shadowAnchor: [0, 40],
      crossOrigin: true
    });

    const marker = L.marker([-3.853369, -38.523843], { icon: icon })
      .addTo(this.map)
      .bindPopup(
        `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <h3 id="horizonteTitle" style="margin: 0; font-size: 16px; cursor: pointer;">Horizonte, CE</h3>
          <p style="margin: 4px 0 0; font-size: 14px; color: #ccc;">Clique para saber mais!</p>
        </div>`,
        {
          closeButton: true,
          autoClose: false,
        }
      );

    // Evento para abrir o modal apenas quando clicar no título "Horizonte"
    marker.on('popupopen', () => {
      const titleElement = document.getElementById('horizonteTitle');
      if (titleElement) {
        titleElement.addEventListener('click', () => this.openModal());
      }
    });

    this.map.setView([-14.2350, -51.9253], 4.5);
  }

  openModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }
}