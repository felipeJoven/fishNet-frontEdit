import { NgModule } from '@angular/core';
import { UnidadpComponent } from './unidadp.component';
import { RouterModule, Routes } from '@angular/router';
import { AddunidadpComponent } from './addunidadp/addunidadp.component';
import { RegistropesComponent } from './registropes/registropes.component';

const routes: Routes = [

  {path: 'consultar', component: UnidadpComponent},
  {path: 'registropes', component: RegistropesComponent},
  {path: 'crear-unidad', component: AddunidadpComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadpRoutingModule { }
