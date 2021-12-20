import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    { usuario: 'jperez', nombre: 'Juan', apellido: 'Perez', genero: 'Masculino' },
    { usuario: 'cruiz', nombre: 'Cristobal', apellido: 'Ruiz', genero: 'Masculino' },
  ];

  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice(); // devuelve una copia del listado de usuarios
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(user: Usuario){
    this.listUsuarios.unshift(user);
  }
}

