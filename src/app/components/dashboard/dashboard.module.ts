import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// El modulo de rutas se configura aca igual y no en el principal
import { DashboardRoutingModule } from './dashboard-routing.module';

// el modulo de dashboard se configura aca y no el el modulo principal (automaticamente)
import { DashboardComponent } from './dashboard.component';

// Shared module con todos los componentes de Materials
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';


@NgModule({
  declarations: [DashboardComponent, InicioComponent, NavbarComponent, UsuariosComponent, ReportesComponent, CrearUsuarioComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
