import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SalidaAlimentos } from 'src/app/model/inv-salida-alimento';
import { InvSalidaAlimentosService } from 'src/app/services/inv-salida-alimento.service';


@Component({
  selector: 'app-consultar-salida',
  templateUrl: './consultar-salida.component.html',
  styleUrls: ['./consultar-salida.component.scss']
})
export class ConsultarSalidaComponent implements OnInit{

  salidaAlimento: SalidaAlimentos[] = [];

  constructor(private invSalidaAlimentosService:InvSalidaAlimentosService, private dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.obtenerSalidaAlimento();
  }

    // Servicios

    obtenerSalidaAlimento():void{
  this.invSalidaAlimentosService.obtenerSalidaAlimentos().subscribe(entradaAlimento => {

    this.salidaAlimento = entradaAlimento;
    console.log(this.salidaAlimento);

  });
}

actualizarSalidaAlimentos(id: number):void{
  console.log(id);
  this.router.navigate(['editar-inventario-salida', id]);
}

eliminarSalidaAlimentos(id: number) {
  this.invSalidaAlimentosService.eliminarSalidaAlimentos(id)
  .subscribe(respuesta => {
    console.log(respuesta);
    this.obtenerSalidaAlimento();
  });

}

}

