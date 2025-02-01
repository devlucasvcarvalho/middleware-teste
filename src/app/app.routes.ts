import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard'; 


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para /
  { path: 'info', component: InfoComponent }, // Rota para /info
  { path: 'login', component: LoginComponent },
  { path: 'dev', canActivate: [AuthGuard], loadComponent: () => import('./dev/dev.component').then(m => m.DevComponent) },
  { path: 'test', canActivate: [AuthGuard], loadComponent: () => import('./test/test.component').then(m => m.TestComponent) },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para /login caso a rota não exista
];