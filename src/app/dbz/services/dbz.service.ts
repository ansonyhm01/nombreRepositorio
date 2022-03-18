import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{
    private _lista: Personaje[] = [
        { nombre: 'Goku', poder: 1500 },
        { nombre: 'Vegeta', poder: 750 },
      ];
    
    get personajes():Personaje[]{
        return [...this._lista];//ronpe la referencia directa con la lista
    }
    constructor(){
        console.log('servicion inicializado');
    }
    agregarPersonaje(personaje:Personaje){
        this._lista.push(personaje);
    }
}