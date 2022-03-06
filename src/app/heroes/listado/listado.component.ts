import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['superma', 'ironman', 'hulk'];
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('on init');
  }
  heroeBorrado: string = '';
  borrar() {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
