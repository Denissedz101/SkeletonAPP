import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

    // Variables
  usuario: string = '';
  contrasena: string = '';


  mostrarMensaje: boolean = true; // mostramos mensaje intro
  
  constructor() {}

    // Funciones que se ejecuta al enviar el formulario
  capturarDatos() {
    console.log('Usuario:', this.usuario);
    console.log('Contraseña:', this.contrasena);
    
    // Aquí hacemos las validaciones 
    this.mostrarMensaje = false; // Ocultamos el mensaje al iniciar sesion




  }


}
