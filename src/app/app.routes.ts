import { Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { authGuard } from './auth.guard';

const authGuardIfIsRequired = environment.production ? [authGuard] : undefined

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.component').then(m => m.AuthComponent)
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    canActivate: authGuardIfIsRequired
  },
  {
    path: 'info',
    loadComponent: () =>
      import('./pages/info/info.component').then(m => m.InfoComponent),
    canActivate: authGuardIfIsRequired
  }
];