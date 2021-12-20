import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})



export class CrearUsuarioComponent implements OnInit {

  generos: any[] = ['Masculino', 'Femenino'];

  form: FormGroup;

  constructor(private fb: FormBuilder,private _usuariosService: UsuarioService,
              private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      genero: this.form.value.genero,
    }
    this._usuariosService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios']);

    this._snackBar.open('Usuario eliminado correctamente!', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
