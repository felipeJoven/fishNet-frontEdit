import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspeciesRoutingModule } from './especies-routing.module';
import { RegistroEspecieComponent } from './registro-especie/registro-especie.component';


@NgModule({
  declarations: [
    RegistroEspecieComponent
      ],
  imports: [
    CommonModule,
    EspeciesRoutingModule
  ]
})
export class EspeciesModule { }
