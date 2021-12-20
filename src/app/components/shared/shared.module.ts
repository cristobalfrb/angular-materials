
// Modulos del proyecto
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos y otros Utiles
import { ReactiveFormsModule } from '@angular/forms'; // Permite utilizar formularios reactivos en la aplicacion
import { HttpClientModule } from '@angular/common/http';

// Angular Material Components
import { MatFormFieldModule } from '@angular/material/form-field';  // Importar campos de formulario al modulo
import { MatInputModule } from '@angular/material/input'; // IMportar Campos Tipo Input al modulo
import { MatButtonModule } from '@angular/material/button'; // Agregar Botones al modulo
import { MatSnackBarModule } from '@angular/material/snack-bar'; // alerta (toast) pequeña con mensaje
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // spinner para mostrar carga de una pagina
import { MatToolbarModule } from '@angular/material/toolbar'; // Material para barra de navegacion
import { MatIconModule } from '@angular/material/icon'; // Material para Iconos
import { MatTableModule } from '@angular/material/table'; // Material para tablas
import { MatTooltipModule } from '@angular/material/tooltip'; // Material para ver informacion de un boton (hover)
import { MatPaginatorModule } from '@angular/material/paginator'; // Agregar paginacion para tabla o pagina
import { MatSortModule } from '@angular/material/sort'; // ordenador de tabla en el header
import { MatCardModule } from '@angular/material/card'; // modulo de card para contenedor 
import { MatGridListModule } from '@angular/material/grid-list'; // sirve para crear grid similar a flexbox o d-grid
import { MatSelectModule } from '@angular/material/select'; // Modulo para utilizar selects en los formularios

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
  ],
  exports: [
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
  ]
})
export class SharedModule { }
