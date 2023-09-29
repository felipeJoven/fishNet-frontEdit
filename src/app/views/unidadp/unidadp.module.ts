import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadpRoutingModule } from './unidadp-routing.module';
import { AddunidadpComponent } from './addunidadp/addunidadp.component';
import { RegistropesComponent } from './registropes/registropes.component';
import { UnidadpComponent } from './unidadp.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditunidadpComponent } from './editunidadp/editunidadp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AddunidadpComponent,
    RegistropesComponent,
    UnidadpComponent,
    EditunidadpComponent,

  ],
  imports: [
    CommonModule,
    MatDialogModule,
    UnidadpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class UnidadpModule { }
