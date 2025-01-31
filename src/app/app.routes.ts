import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para /
  { path: 'info', component: InfoComponent }, // Rota para /info
];
