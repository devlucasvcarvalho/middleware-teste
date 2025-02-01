import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <input type="text" [(ngModel)]="email" name="email" placeholder="Email" required>
      <input type="password" [(ngModel)]="password" name="password" placeholder="Senha" required>
      <button type="submit">Entrar</button>
    </form>
  `,
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/dev']);
    } else {
      alert('Login inválido!');
    }
  }
}