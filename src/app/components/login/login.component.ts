import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* Variables */
  form: FormGroup // creacion de un formulario como formgroup
  loading: boolean = false; // variable para saber si esta cargando la pagina o no (mostrar el spinner)

  constructor(private fb: FormBuilder, 
              private _snackBar: MatSnackBar,
              private router: Router) {
    // crear las validaciones del formulario
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    // Imitar el backend (post al servicio)
    if(usuario == 'cruiz' && password == '1234'){
      // redireccionar al dashboard
      this.fakeLoading();

    }else{
      // mostrar un mensaje de error
      this.error();
    }

  }


  error(){
    this._snackBar.open('Usuario o contraseña incorrectos!', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  // Loading imitando la obtencion de datos mediante el post
  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      // se redirecciona al dashboard
      this.router.navigate(['dashboard']);
    }, 1000)
  }

}
