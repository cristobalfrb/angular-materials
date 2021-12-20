
// Modulos del Proyecto
import { BrowserModule } from '@angular/platform-browser'; // Proporciona servicios para la plataforma del navegador
import { NgModule } from '@angular/core'; // unidad de distribucion y compilacion de los componentes de angular
import { AppRoutingModule } from './app-routing.module'; // importa el modulo de rutas de la aplicacion
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // modulo para implementar animacines al proyecto (experiencia de usuario)

// Componentes
import { AppComponent } from './app.component'; // AppComponent del componente principal del proyecto
import { LoginComponent } from './components/login/login.component'; // Componente del modulo

// Modulo compartido
import { SharedModule } from './components/shared/shared.module'; // Conitiene todos los modulos de materials y otros utiles


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
