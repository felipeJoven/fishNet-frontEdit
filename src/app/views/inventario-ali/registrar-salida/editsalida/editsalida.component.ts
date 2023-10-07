import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalidaAlimentos } from 'src/app/model/inv-salida-alimento';
import { Lote } from 'src/app/model/lote';
import { InvSalidaAlimentosService } from 'src/app/services/inv-salida-alimento.service';
@Component({
  selector: 'app-editsalida',
  templateUrl: './editsalida.component.html',
  styleUrls: ['./editsalida.component.scss']
})
export class EditSalidaComponent implements OnInit{

  salidaAlimentos: SalidaAlimentos = {
    id: 0,
    fechaSalida: new Date,
    numeroFactura: 0,
    numeroKilos: 0,
    lote: new Lote
  }

  constructor(private salidaAlimentosService: InvSalidaAlimentosService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const idSalidaAli = this.route.snapshot.paramMap.get('id');

    if(idSalidaAli !== null){
      const id = +idSalidaAli;

      this.salidaAlimentosService.obtenerSalidaAlimentosPorId(id).subscribe(salidaAlimentos => {
        this.salidaAlimentos = this.salidaAlimentos;
      });
    }
  }

  guardarCambiosSalidaAli(): void {
    this.salidaAlimentosService.actualizarSalidaAlimentos(this.salidaAlimentos.id, this.salidaAlimentos).subscribe(() =>{
      this.router.navigate(['inventario/consultar-salida']);
    })
  }
}
