import { Component, OnInit } from '@angular/core';
import { InteracoesService, Interacao } from '../../services/interacoes.service';
import { ItemCardComponent } from '../item-card/item-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-map-item-list',
  standalone: true,
  imports: [ItemCardComponent, CommonModule],
  templateUrl: './modal-map-item-list.component.html',
  styleUrl: './modal-map-item-list.component.scss',
})
export class ModalMapItemListComponent implements OnInit {
  interacoes: Interacao[] = [];
  filteredInteracoes: Interacao[] = [];

  constructor(private interacoesService: InteracoesService) {}

  ngOnInit(): void {
    this.loadInteracoes();
  }

  loadInteracoes(): void {
    this.interacoesService.getInteracoes().subscribe((data) => {
      console.log("seu data: ", data);
      this.interacoes = data;
      this.filteredInteracoes = this.filterByMunicipio('Horizonte');
    });
  }

  filterByMunicipio(municipio: string): Interacao[] {
    return this.interacoes.filter(
      (interacao) => interacao.municipio.toLowerCase() === municipio.toLowerCase()
    );
  }
}
