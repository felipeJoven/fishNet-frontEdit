import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoteRoutingModule } from './lote-routing.module';
import { AddLoteComponent } from './addlote/addlote.component';
import { ConsultarLoteComponent } from './consultar-lote/consultar-lote.component';


@NgModule({
  declarations: [
    AddLoteComponent,
    ConsultarLoteComponent
  ],
  imports: [
    CommonModule,
    LoteRoutingModule
  ]
})
export class LoteModule { }


