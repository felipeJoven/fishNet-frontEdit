import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { InventarioAliComponent } from './views/inventario-ali/inventario-ali.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { EspeciesComponent } from './views/especies/especies.component';
// import { ProveedorComponent } from './views/proveedor/proveedor.component';
// import { LoteComponent } from './views/lote/lote.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HomeComponent,
    SidenavComponent,
    WelcomeComponent,
    InventarioAliComponent,
    SublevelMenuComponent,
    EspeciesComponent,
    // ProveedorComponent,
    // LoteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
