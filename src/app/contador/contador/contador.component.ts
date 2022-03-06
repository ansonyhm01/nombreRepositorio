import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h1>Nro operaciones:{{ nro }}</h1>

    <button (click)="acumular(+1); nro = nro + 1">+1</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(-1); nro = nro + 1">-1</button>
  `,
})
export class ContadorComponent {
  title: string = 'Titulo contado de la aplicacion';
  numero: number = 10;
  nro: number = 0;
  base: number = 5;
  acumular(nro: number) {
    // this.nro += 1;
    this.numero += nro * this.base;
  }
}
