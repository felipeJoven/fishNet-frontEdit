import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SalidaAlimentos } from 'src/app/model/inv-salida-alimento';
import { InvSalidaAlimentosmentoService } from 'src/app/services/inv-salida-alimento.service';


@Component({
  selector: 'app-consultar-salida',
  templateUrl: './consultar-salida.component.html',
  styleUrls: ['./consultar-salida.component.scss']
})
export class ConsultarSalidaComponent {

  salidaAlimento: SalidaAlimentos[] = [];

  constructor(private invSalidaAlimentosmentoService:InvSalidaAlimentosmentoService, private dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.obtenerSalidaAlimento();
  }

    // Servicios

    obtenerSalidaAlimento():void{
  this.invSalidaAlimentosmentoService.obtenerSalidaAlimentos().subscribe(entradaAlimento => {

    this.salidaAlimento = entradaAlimento;
    console.log(this.salidaAlimento);

  });
}

actualizarSalidaAlimentos(id: number):void{
  console.log(id);
  this.router.navigate(['editar-inventario-salida', id]);
}

eliminarSalidaAlimentos(id: number) {
  this.invSalidaAlimentosmentoService.eliminarSalidaAlimentos(id)
  .subscribe(respuesta => {
    console.log(respuesta);
    this.obtenerSalidaAlimento();
  });

}

}

