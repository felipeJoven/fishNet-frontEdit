import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EntradaAlimentos } from 'src/app/model/inv-entrada-alimento';
import { InvEntradaAlimentoService } from 'src/app/services/inv-entrada-alimento.service';

@Component({
  selector: 'app-consultar-entrada',
  templateUrl: './consultar-entrada.component.html',
  styleUrls: ['./consultar-entrada.component.scss']
})
export class ConsultarEntradaComponent implements OnInit {

  entradaAlimento: EntradaAlimentos[] = [];

    constructor(
                private invEntradaAlimentoService: InvEntradaAlimentoService, 
                private dialog: MatDialog, 
                private route: ActivatedRoute, 
                private router: Router
                ) { }

    ngOnInit(): void {
      this.obtenerEntradaAlimento();
    }

      // Servicios

    obtenerEntradaAlimento():void{
    this.invEntradaAlimentoService.obtenerEntradaAlimentos().subscribe(entradaAlimento => {
      
      this.entradaAlimento = entradaAlimento;
      console.log(this.entradaAlimento);
      
    });
  }

  editarEntradaAlimentos(id: number):void{
    console.log(id);
    this.router.navigate(['editar-inventario-entrada', id]);
  }

  eliminarEntradaAlimentos(id: number) {
    this.invEntradaAlimentoService.eliminarEntradaAlimentos(id)
    .subscribe(respuesta => {
      console.log(respuesta);
      this.obtenerEntradaAlimento();
    });
    
  }

}
