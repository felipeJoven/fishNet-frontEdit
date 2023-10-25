import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especies } from 'src/app/model/especies';
import { EspeciesService } from 'src/app/services/especies.service';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.scss']
})
export class EspeciesComponent implements OnInit {


  especies: Especies[] = [];


  constructor(private especiesService: EspeciesService,
    private router: Router){}
  ngOnInit(): void {
    this.obtenerEspecies();
  }

  obtenerEspecies(): void {
    this.especiesService.obtenerEspecies().subscribe(especies => {
      this.especies = especies;
    });
  }

  editarEspecie(id: number):void{
    console.log(id);

    this.router.navigate(['editar-especies', id])
}

eliminarEspecies(id: number) {
  this.especiesService.eliminarEspecies(id)
  .subscribe(respuesta => {
    console.log(respuesta);
    this.obtenerEspecies();
  });
  
}

  
}
