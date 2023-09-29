import { NgModule } from '@angular/core';
import { ProveedorComponent } from './proveedor.component';
import { AddproveedorComponent } from './addproveedor/addproveedor.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'consultar', component: ProveedorComponent},
  {path: 'crear-proveedor', component: AddproveedorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedorRoutingModule { }
