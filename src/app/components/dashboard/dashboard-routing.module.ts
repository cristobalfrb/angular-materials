import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes dentro de Dashboard
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';

// Todas estas rutas funcionan a partir del http://localhost4200:dashboard/
const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      // Rutas hijas del dashboard recordar que todas tienen el prefijo dashboard/
      {
        path: '', component: InicioComponent
      },
      {
        path: 'usuarios', component: UsuariosComponent
      },
      {
        path: 'reportes', component: ReportesComponent
      },
      {
        path: 'crear-usuario', component: CrearUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
