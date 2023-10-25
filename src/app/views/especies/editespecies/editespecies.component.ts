import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Especies } from 'src/app/model/especies';
import { EspeciesService } from 'src/app/services/especies.service';

@Component({
  selector: 'app-editespecies',
  templateUrl: './editespecies.component.html',
  styleUrls: ['./editespecies.component.scss']
})
export class EditespeciesComponent implements OnInit {

  especies: Especies = {
    id: 0,
    nombreEspecie: "",
    fechaCreacion: new Date
  }

  constructor(private especiesService: EspeciesService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const idEspecies = this.route.snapshot.paramMap.get('id');

    if (idEspecies !== null) {
      const id = +idEspecies;

      this.especiesService.obtenerEspeciesPorId(id).subscribe(especies => {
        this.especies = especies;
      });
    }
  }
  guardarCambiosEspecies(): void {
    this.especiesService.actualizarEspecies(this.especies.id, this.especies).subscribe(() => {
      this.router.navigate(['especies/consultar']);
    });
  }
}