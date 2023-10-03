import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { InventarioaliRoutingModule } from './inventarioali-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarEntradaComponent } from './registrar-entrada/registrar-entrada.component';
import { RegistrarSalidaComponent } from './registrar-salida/registrar-salida.component';
import { ConsultarEntradaComponent } from './registrar-entrada/consultar-entrada/consultar-entrada.component';
import { ConsultarSalidaComponent } from './registrar-salida/consultar-salida/consultar-salida.component';
import { EditEntradaComponent } from './registrar-entrada/editentrada/editentrada.component';
import { EditSalidaComponent } from './registrar-salida/editsalida/editsalida.component';
import { TipoAlimentoComponent } from './tipo-alimento/addalimento/addalimento.component';
import { AddalimentoComponent } from './tipo-alimento/tipo-alimento.component';


@NgModule({
  declarations: [
    RegistrarEntradaComponent,
    ConsultarEntradaComponent,
    ConsultarSalidaComponent,
    RegistrarSalidaComponent,
    EditEntradaComponent,
    EditSalidaComponent,
    TipoAlimentoComponent,
    AddalimentoComponent

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
