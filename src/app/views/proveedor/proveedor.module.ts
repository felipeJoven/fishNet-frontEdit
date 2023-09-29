import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { AddproveedorComponent } from './addproveedor/addproveedor.component';
import { ProveedorComponent } from './proveedor.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditproveedorComponent } from './editproveedor/editproveedor.component';

@NgModule({
  declarations: [

    ProveedorComponent,
    AddproveedorComponent,
    EditproveedorComponent

  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ProveedorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class ProveedorModule { }
