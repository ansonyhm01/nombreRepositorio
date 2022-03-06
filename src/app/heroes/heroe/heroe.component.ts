import { Component } from '@angular/core';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  contador: number = 0;
  listaHeroes = ['Spidermar', 'holk', 'la mole'];
  nombre: string = 'Ironman  ';
  edad: number = 30;
  nombreCompleto(): string {
    console.log('nombre y edad');

    return `${this.nombre}-${this.edad}`;
  }
  get nombreCapitalizado(): string {
    console.log('capitalizado');

    return this.nombre.toUpperCase();
  }
  noRelacionado() {
    console.log('----------------------');
    // this.contador += 1;
    return this.contador;
    return;
  }
  cambiarNombre(): void {
    console.log('cambiar nombre');
    this.nombre = 'Spiderman';
  }
  cambiarEdad() {
    console.log('cambiar edad');
    this.edad = 50;
    this.contador += 1;
  }
}
