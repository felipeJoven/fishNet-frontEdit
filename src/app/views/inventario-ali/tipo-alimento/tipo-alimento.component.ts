import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoAlimento } from 'src/app/model/tipo-alimento';
import { TipoAlimentoService } from 'src/app/services/tipo-alimento.service';

@Component({
  selector: 'app-tipo-alimento',
  templateUrl: './tipo-alimento.component.html',
  styleUrls: ['./tipo-alimento.component.scss']
})
export class AddalimentoComponent implements OnInit {

  tipoAlimento: TipoAlimento[] = [];

  constructor(private tipoAlimentoService: TipoAlimentoService, 
              private dialog: MatDialog, 
              private route: ActivatedRoute, 
              private router: Router
              ) { }
    
ngOnInit(): void {
this.obtenerTipoAlimento();
}

  // Servicios

  obtenerTipoAlimento():void{
    this.tipoAlimentoService.obtenerTipoAlimento().subscribe(tipoAlimento => {
      this.tipoAlimento = tipoAlimento;
    });
  }

  eliminarTipoAlimento(id: number) {
    this.tipoAlimentoService.eliminarTipoAlimento(id)
    .subscribe(respuesta => {
      console.log(respuesta);
      this.obtenerTipoAlimento();
    });
    
  }

}
