import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { QuadroComponent } from './pages/quadro/quadro.component';

export const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registrar', component: RegistrarComponent
  },
  {
    path: 'quadro', component: QuadroComponent
  }
];
