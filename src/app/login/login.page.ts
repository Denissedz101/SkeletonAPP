import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  ingresar() {
    const userValid = /^[a-zA-Z0-9]{3,8}$/.test(this.usuario);
    const passValid = /^\d{4}$/.test(this.contrasena);

    if (userValid && passValid) {
      const navExtras: NavigationExtras = {
        queryParams: { usuario: this.usuario }
      };
      this.router.navigate(['home'], navExtras);
    } else {
      alert('Datos inválidos: Usuario (3-8 alfanuméricos) y contraseña (4 dígitos)');
    }
  }
}
