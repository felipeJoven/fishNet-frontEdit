import { Component, OnInit, numberAttribute } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UnidadProductiva } from 'src/app/model/unidad-productiva';
import { UnidadProductivaService } from 'src/app/services/unidad-productiva.service';

@Component({
  selector: 'app-editunidadp',
  templateUrl: './editunidadp.component.html',
  styleUrls: ['./editunidadp.component.scss']
})
export class EditunidadpComponent implements OnInit {

  idUnidad: number;
  submitted = false;
  formulario!: FormGroup;

  constructor(
    private unidadPService: UnidadProductivaService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.idUnidad = Number(this.route.snapshot.paramMap.get('id'));
    this.buildForm();

    if (this.idUnidad !== null) {
      const id = +this.idUnidad;

      this.unidadPService.obtenerUnidadProductivaPorId(id).subscribe(unidadp => {
        this.formulario.get('nombreUnidadP').setValue(unidadp.nombreUnidadP);
        this.formulario.get('area').setValue(unidadp.area);
        this.formulario.get('coordenadas').setValue(unidadp.coordenadas);
        this.formulario.get('profundidad').setValue(unidadp.profundidad);
        this.formulario.get('observacion').setValue(unidadp.observacion);
      });

    }

  }


  private buildForm() {
    this.formulario = new FormGroup({
      nombreUnidadP: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      coordenadas: new FormControl('', Validators.required),
      profundidad: new FormControl('', Validators.required),
      observacion: new FormControl('', Validators.required)
    });
  }


  get nombreUnidadPFieldInvalid() {
    return this.nombreUnidadP?.touched && this.nombreUnidadP.invalid;
  }

  get nombreUnidadP() {
    this.formulario.get('nombreUnidadP')
    return this.formulario.get('nombreUnidadP')
  }

  get areaFieldInvalid() {
    return this.nombreUnidadP?.touched && this.nombreUnidadP.invalid;
  }

  get area() {
    this.formulario.get('area')
    return this.formulario.get('area')
  }

  get coordenadasFieldInvalid() {
    return this.coordenadas?.touched && this.coordenadas.invalid;
  }

  get coordenadas() {
    this.formulario.get('coordenadas')
    return this.formulario.get('coordenadas')
  }

  get profundidadFieldInvalid() {
    return this.profundidad?.touched && this.profundidad.invalid;
  }

  get profundidad() {
    this.formulario.get('profundidad')
    return this.formulario.get('profundidad')
  }

  get observacionFieldInvalid() {
    return this.observacion?.touched && this.observacion.invalid;
  }

  get observacion() {
    this.formulario.get('observacion')
    return this.formulario.get('observacion')
  }


  guardarCambiosUnidadProductiva(): void {

    let unidadEnviar: UnidadProductiva = new UnidadProductiva();

    unidadEnviar.id = this.idUnidad;
    unidadEnviar.nombreUnidadP = this.formulario.get('nombreUnidadP').value;
    unidadEnviar.area = this.formulario.get('area').value;
    unidadEnviar.coordenadas = this.formulario.get('coordenadas').value;
    unidadEnviar.profundidad = this.formulario.get('profundidad').value;
    unidadEnviar.observacion = this.formulario.get('observacion').value;


    this.unidadPService.actualizarUnidadProductiva(this.idUnidad, unidadEnviar).subscribe(

      response => {
        console.log(response);
        this.submitted = true;
        this.router.navigate(['/unidad/consultar']);
      },
      error => {
        console.log(error);
      });

  }

}
