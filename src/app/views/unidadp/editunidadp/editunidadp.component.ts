import { Component, OnInit, numberAttribute } from '@angular/core';
import { UnidadProductiva } from 'src/app/model/unidad-productiva';
import { UnidadProductivaService } from 'src/app/services/unidad-productiva.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editunidadp',
  templateUrl: './editunidadp.component.html',
  styleUrls: ['./editunidadp.component.scss']
})
export class EditunidadpComponent implements OnInit{
  
  unidadp: UnidadProductiva = {
  id: 0,
  area: 0,
  nombreUnidadP:'',
  coordenadas: 0,
  observacion: '',
  profundidad: 0,
  fechaRegistro : new Date
  }

  constructor(private unidadPService: UnidadProductivaService, private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    const idUnidad = this.route.snapshot.paramMap.get('id');

    if(idUnidad !== null){
      const id = +idUnidad;

      this.unidadPService.obtenerUnidadProductivaPorId(id).subscribe(unidadp =>{
        this.unidadp = unidadp;
      });
    }
  }

 
  guardarCambiosUnidadProductiva(): void {
    this.unidadPService.actualizarUnidadProductiva(this.unidadp.id, this.unidadp).subscribe(() => {
      this.router.navigate(['unidad/consultarcos']);
    });
  }

}
