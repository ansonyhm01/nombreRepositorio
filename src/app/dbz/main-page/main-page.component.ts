import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { ListadoComponent } from '../../heroes/listado/listado.component';
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
    nombre: 'inicial',
    poder: 500,
  };
  constructor() {}
  ngOnInit(): void {}
  agregarPersonaje(argumento:Personaje){
    console.log('reciviendo',argumento);
    this.lista.push(argumento)
    
  }
  
}
