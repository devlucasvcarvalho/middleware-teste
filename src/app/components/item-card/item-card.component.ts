import { Component, Input } from '@angular/core';

import { Interacao } from '../../services/interacoes.service';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input() interacao!: Interacao;
}
