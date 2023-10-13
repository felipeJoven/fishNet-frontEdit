import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspeciesComponent } from './especies.component';
import { RegistroEspecieComponent } from './registro-especie/registro-especie.component';

const routes: Routes = [
  {path: 'consultar', component: EspeciesComponent},
  {path: 'registro-especies', component: RegistroEspecieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspeciesRoutingModule { }
