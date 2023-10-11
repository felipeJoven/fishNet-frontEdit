import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { EditunidadpComponent } from './views/unidadp/editunidadp/editunidadp.component';
import { EditproveedorComponent } from './views/proveedor/editproveedor/editproveedor.component';
import { EditEntradaComponent } from './views/inventario-ali/registrar-entrada/editentrada/editentrada.component';
import { EditSalidaComponent } from './views/inventario-ali/registrar-salida/editsalida/editsalida.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'unidad', loadChildren: () => import('./views/unidadp/unidadp.module').then(m => m.UnidadpModule)},
  {path: 'inventario', loadChildren: () => import('./views/inventario-ali/inventarioali.module').then(m => m.InventarioaliModule)},
  {path: 'editar-inventario-entrada/:id', component: EditEntradaComponent},
  {path: 'editar-inventario-salida/:id', component: EditSalidaComponent},
  {path: 'editar-unidad/:id', component: EditunidadpComponent},
  {path: 'proveedor', loadChildren: () => import('./views/proveedor/proveedor.module').then(m => m.ProveedorModule)},
  {path: 'editar-proveedor/:id', component: EditproveedorComponent},
  {path: 'lote', loadChildren: () => import('./views/lote/lote.module').then(m => m.LoteModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
