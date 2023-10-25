import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoteRoutingModule } from './lote-routing.module';
import { AddLoteComponent } from './addlote/addlote.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { EditloteComponent } from './editlote/editlote.component';
import { LoteComponent } from './lote.component';



@NgModule({
  declarations: [
    AddLoteComponent,
    EditloteComponent,
    LoteComponent
  ],
  imports: [
    CommonModule,
    LoteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule
  ]
})
export class LoteModule { }


