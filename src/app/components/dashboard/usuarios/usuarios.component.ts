import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  // Inicializo la lista vacia
  listUsuarios: Usuario[] = [];

  // Configurar las  columnas de la tabla y de donde extraera los datos 
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'genero', 'acciones'];
  dataSource!:MatTableDataSource<any>

  // Importacion para la paginacion de la tabla
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // Importacion para el ordenamiento de la tabla
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // Cargar en cuanto se inicie el componente 
    this.cargarUsuarios();
  }

  // Metodo para cargar los usuarios (traerlos desde el service )
  cargarUsuarios(){
    this.listUsuarios = this._usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }

  // Agregado ciclo de vida para paginacion, ordenamiento y enlace con la tabla
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number){
    this._usuarioService.eliminarUsuario(index); 

    this._snackBar.open('Usuario eliminado correctamente correctamente!', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
    
    this.cargarUsuarios();
    this.ngAfterViewInit();
  }

}
