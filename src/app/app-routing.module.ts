import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // Si la ruta esta vacia redireccionar al login
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  // Si la ruta es desconocida (*) redirecciona al login
  {
    path: '*', redirectTo: 'login', pathMatch: 'full'
  },
  // Ruta del login, mostrar el componente de Login con su vista
  {
    path: 'login', component: LoginComponent
  },
  // carga del dashboard utilzando lazy load la 
  // cual acelera la primera carga del sistema trayendo solo los componentes necesarios
  {
    path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module')
      .then(x => x.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
