import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  lista: Personaje[] = [
    { nombre: 'Goku', poder: 1500 },
    { nombre: 'Vegeta', poder: 750 },
  ];
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  constructor() {}
  ngOnInit(): void {}
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);

    this.lista.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
