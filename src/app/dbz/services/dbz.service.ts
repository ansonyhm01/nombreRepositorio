import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{
    lista: Personaje[] = [
        { nombre: 'Goku', poder: 1500 },
        { nombre: 'Vegeta', poder: 750 },
      ];
    constructor(){
        console.log('servicion inicializado');
        
    }
}