import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntradaAlimentos } from 'src/app/model/inv-entrada-alimento';
import { Proveedor } from 'src/app/model/proveedor';
import { TipoAlimento } from 'src/app/model/tipo-alimento';
import { InvEntradaAlimentoService } from 'src/app/services/inv-entrada-alimento.service';

@Component({
  selector: 'app-edientrada',
  templateUrl: './editentrada.component.html',
  styleUrls: ['./editentrada.component.scss']
})
export class EditEntradaComponent implements OnInit {

  entradaAlimentos: EntradaAlimentos = {
    id: 0,
    fechaCreacion: new Date ,
    fechaVencimiento: new Date,
    numeroFactura: 0,
    registroIca: "",
    numeroKilos: 0,
    tipoAlimento: new TipoAlimento,
    proveedor: new Proveedor
  }

  constructor(private entradaAlimentosService: InvEntradaAlimentoService, private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    const idEntradaAli = this.route.snapshot.paramMap.get('id');

    if(idEntradaAli !== null){
      const id = +idEntradaAli;

      this.entradaAlimentosService.obtenerEntradaAlimentosPorId(id).subscribe(entradaAlimentos =>{
        this.entradaAlimentos = entradaAlimentos;
      });
    }
  }

 
  guardarCambiosEntradaAli(): void {
    this.entradaAlimentosService.actualizarEntradaAlimentos(this.entradaAlimentos.id, this.entradaAlimentos).subscribe(() => {
      this.router.navigate(['inventario/consultar-entrada']);
    });
  }

}
