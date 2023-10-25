import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Lote } from 'src/app/model/lote';
import { LoteService } from 'src/app/services/lote.service';


@Component({
    selector: 'app-lote',
    templateUrl: './lote.component.html',
    styleUrls: ['./lote.component.scss']
})
export class LoteComponent implements OnInit{

  lote: Lote[] = [];

  constructor(
    private loteService: LoteService,
    private dialog: MatDialog, 
    private route: ActivatedRoute, 
    private router: Router
  ){ }

  ngOnInit(): void{
    this.obtenerLote();

  }

  obtenerLote():void{
    this.loteService.obtenerLote().subscribe(lote => {
      
      this.lote = lote;
      console.log(this.lote);
      
    });
  }

  editarLote(id: number):void{
    console.log(id);

    this.router.navigate(['editar-lote', id])
}
  

  eliminarLote(id: number) {
    this.loteService.eliminarLote(id)
    .subscribe(respuesta => {
      console.log(respuesta);
      this.obtenerLote();
    });
    
  }

}
