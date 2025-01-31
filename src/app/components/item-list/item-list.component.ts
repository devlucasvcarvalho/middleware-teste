import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ItemCardComponent } from '../item-card/item-card.component';
import { InteracoesService, Interacao } from '../../services/interacoes.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    ItemCardComponent,
    FormsModule,
    NgFor,
    NgClass,
    NgIf
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  interacoes: Interacao[] = [];
  filteredInteracoes: Interacao[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 0;
  visiblePages: number[] = [];
  showStartEllipsis: boolean = false;
  showEndEllipsis: boolean = false;

  constructor(private interacoesService: InteracoesService) {}

  ngOnInit(): void {
    this.interacoesService.getInteracoes().subscribe((data) => {
      this.interacoes = data;
      this.filteredInteracoes = data;
      this.updatePagination();
    });
  }

  search(): void {
    this.filteredInteracoes = this.interacoes.filter((item) =>
      item.municipio.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.uf.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.acao.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.currentPage = 1;
    this.updatePagination();
  }

  get paginatedInteracoes(): Interacao[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredInteracoes.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredInteracoes.length / this.itemsPerPage);

    const maxVisible = 3; // Número máximo de páginas vizinhas exibidas
    const startPage = Math.max(2, this.currentPage - maxVisible); // Sempre inicia depois da página 1
    const endPage = Math.min(this.totalPages - 1, this.currentPage + maxVisible); // Sempre termina antes da última página

    this.visiblePages = [];
    for (let i = startPage; i <= endPage; i++) {
      this.visiblePages.push(i);
    }

    // Determinar se mostrar os elipses
    this.showStartEllipsis = startPage > 2; // Mostrar elipses antes das páginas vizinhas
    this.showEndEllipsis = endPage < this.totalPages - 1; // Mostrar elipses depois das páginas vizinhas
  }
}
