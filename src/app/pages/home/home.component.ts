import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ItemListComponent } from '../../components/item-list/item-list.component';
import { MapViewerComponent } from '../../components/map-viewer/map-viewer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    ItemListComponent,
    MapViewerComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  // Corrigi o nome do arquivo de estilo
})
export class HomeComponent implements OnInit {
  sidebarVisible: boolean = true;

  ngOnInit(): void {
    // Verifica se a largura da tela é menor que 768px (padrão para dispositivos móveis)
    if (window.innerWidth < 768) {
      this.sidebarVisible = false;  // Se for mobile, a sidebar estará oculta por padrão
    }
  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
