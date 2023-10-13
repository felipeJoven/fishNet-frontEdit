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
  especie: Especies = {
    id: 0,
    nombreEspecie: '',
    fechaRegistro: new Date

  }

  constructor(private especiesService: EspeciesService,
    private router: Router){}
  ngOnInit(): void {
    this.obtenerEspecies();
  }

  obtenerEspecies(): void {
    this.especiesService.obtenerEspecies().subscribe(especies => {
      this.especies = this.especies;
    });
  }

  
}
