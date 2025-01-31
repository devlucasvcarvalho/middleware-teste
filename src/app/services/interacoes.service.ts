import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Interacao {
  id: string;
  municipio: string;
  uf: string;
  acao: string;
  objetivos: string[];
  problemas: string | null;
  metodologia: string;
  atores_principais: string;
  regulamentacao: string | null;
  recursos_financeiros: string | null;
  fonte_de_recursos: string | null;
  responsavel: string;
  email: string | null;
  telefone: string | null;
  observacoes: string | null;
  nucleo_tematico: string;
  thumbnail: string
}

@Injectable({
  providedIn: 'root'
})
export class InteracoesService {
  private readonly apiUrl = 'assets/mocks/interacoes.json';

  constructor(private http: HttpClient) {}

  getInteracoes(): Observable<Interacao[]> {
    return this.http.get<Interacao[]>(this.apiUrl);
  }
}
