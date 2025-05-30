import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  animations: [
    trigger('fadeInTitle', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomePage {
  usuario: string = '';
  nombre = '';
  apellido = '';
  nivel = '';
  fechaNacimiento: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'] || '';
    });
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.nivel = '';
    this.fechaNacimiento = '';

    const nombreInput = document.getElementById('nombreInput');
    const apellidoInput = document.getElementById('apellidoInput');

    if (nombreInput) {
      nombreInput.animate([{ transform: 'translateX(-100px)' }, { transform: 'translateX(0)' }], {
        duration: 1000,
        iterations: 1,
      });
    }

    if (apellidoInput) {
      apellidoInput.animate([{ transform: 'translateX(-100px)' }, { transform: 'translateX(0)' }], {
        duration: 1000,
        iterations: 1,
      });
    }
  }

  mostrar() {
    alert(`Nombre completo: ${this.nombre} ${this.apellido}`);
  }
}
