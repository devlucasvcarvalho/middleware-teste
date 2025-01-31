import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const apiKey = localStorage.getItem('API_KEY');
    const correctApiKey = process.env.VERCEL_API_KEY; // Pega a chave do ambiente (se disponível)

    if (apiKey === correctApiKey) {
      return true;
    } else {
      this.router.navigate(['/']); // Redireciona para a home se não tiver acesso
      return false;
    }
  }
}