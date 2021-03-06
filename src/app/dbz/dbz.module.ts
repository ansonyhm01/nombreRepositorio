//importaciones de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//importaciones de 3ros
//nuestras inportaciones que creamos
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
@NgModule({
  declarations: [MainPageComponent, PersonajesComponent, AgregarComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
