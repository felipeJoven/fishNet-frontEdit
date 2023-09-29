import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { InventarioaliRoutingModule } from './inventarioali-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarEntradaComponent } from './registrar-entrada/registrar-entrada.component';
import { ConsultarEntradaComponent } from './registrar-entrada/consultar-entrada/consultar-entrada.component';
import { RegistrarSalidaComponent } from './registrar-salida/registrar-salida.component';
import { EditEntradaComponent } from './registrar-entrada/editentrada/editentrada.component';
import { EditSalidaComponent } from './registrar-salida/editsalida/editsalida.component';
import { TipoAlimentoComponent } from './tipo-alimento/tipo-alimento.component';
import { GetalimentoComponent } from './tipo-alimento/getalimento/getalimento.component';


@NgModule({
  declarations: [
    RegistrarEntradaComponent,
    ConsultarEntradaComponent,
    RegistrarSalidaComponent,
    EditEntradaComponent,
    EditSalidaComponent,
    TipoAlimentoComponent,
    GetalimentoComponent

  ],
  imports: [
    CommonModule,
    MatDialogModule,
    InventarioaliRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class InventarioaliModule { }
