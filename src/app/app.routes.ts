import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para /
  { path: 'info', component: InfoComponent, canActivate: [AuthGuard] }, // Rota para /info
  { path: 'login', component: LoginComponent }  // Rota de login

];

