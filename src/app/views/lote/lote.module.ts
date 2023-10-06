import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoteRoutingModule } from './lote-routing.module';
import { AddLoteComponent } from './addlote/addlote.component';
import { ConsultarLoteComponent } from './consultar-lote/consultar-lote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AddLoteComponent,
    ConsultarLoteComponent
  ],
  imports: [
    CommonModule,
    LoteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class LoteModule { }


