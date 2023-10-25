import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoteComponent } from './addlote/addlote.component';
import { LoteComponent } from './lote.component';


const routes: Routes = [
  { path: 'crear-lote', component: AddLoteComponent },
  { path: 'consultar', component: LoteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoteRoutingModule { }
