import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { ListadoComponent } from '../../heroes/listado/listado.component';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  //lista:Personaje[]=[]; 
  nuevo: Personaje = {
    nombre: 'inicial',
    poder: 500,
  };
  constructor() {
  
  }
  ngOnInit(): void {}

}
