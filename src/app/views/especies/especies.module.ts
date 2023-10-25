import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspeciesRoutingModule } from './especies-routing.module';
import { RegistroEspecieComponent } from './registro-especie/registro-especie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EspeciesComponent } from './especies.component';
import { EditespeciesComponent } from './editespecies/editespecies.component';


@NgModule({
  declarations: [
    RegistroEspecieComponent,
    EspeciesComponent,
    EditespeciesComponent
      ],
  imports: [
    CommonModule,
    EspeciesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class EspeciesModule { }
