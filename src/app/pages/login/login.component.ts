import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiKey: string = '';  // Armazenar a chave de acesso inserida pelo usuário

  constructor(private router: Router) {}

  login() {
    if (this.apiKey === 'SUA_CHAVE_SECRETA') {  // Verificar a chave
      localStorage.setItem('api_key', this.apiKey);  // Salvar no localStorage
      this.router.navigate(['/dev']);  // Redireciona para uma rota protegida
    } else {
      alert('Chave inválida!');
    }
  }
}
