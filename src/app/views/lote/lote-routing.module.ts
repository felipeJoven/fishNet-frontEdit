import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoteComponent } from './addlote/addlote.component';
import { ConsultarLoteComponent } from './consultar-lote/consultar-lote.component';

const routes: Routes = [
  { path: 'crear-lote', component: AddLoteComponent },
  { path: 'consultar-lote', component: ConsultarLoteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoteRoutingModule { }
