import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioAliComponent } from './inventario-ali.component';
import { RegistrarSalidaComponent } from './registrar-salida/registrar-salida.component';
import { RegistrarEntradaComponent } from './registrar-entrada/registrar-entrada.component';
import { ConsultarEntradaComponent } from './registrar-entrada/consultar-entrada/consultar-entrada.component';
import { ConsultarSalidaComponent } from './registrar-salida/consultar-salida/consultar-salida.component';
import { AddalimentoComponent } from './tipo-alimento/tipo-alimento.component';
import { TipoAlimentoComponent } from './tipo-alimento/addalimento/addalimento.component';

const routes: Routes = [
  {path: 'informe', component: InventarioAliComponent},
  {path: 'consultar-entrada', component: ConsultarEntradaComponent},
  {path: 'registrar-entrada', component: RegistrarEntradaComponent},
  {path: 'consultar-salida', component: ConsultarSalidaComponent},
  {path: 'registrar-salida', component: RegistrarSalidaComponent},
  {path: 'tipo-alimento', component: TipoAlimentoComponent},
  {path: 'consultar-alimento', component: AddalimentoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioaliRoutingModule { }
