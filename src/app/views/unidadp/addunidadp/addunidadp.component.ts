import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';

import { UnidadProductivaService } from 'src/app/services/unidad-productiva.service';

@Component({
  selector: 'app-addunidadp',
  templateUrl: './addunidadp.component.html',
  styleUrls: ['./addunidadp.component.scss']
})
export class AddunidadpComponent implements OnInit {

  // Propiedades relacionadas al formulario
  formulario!: FormGroup;

  // Listas de opciones
  submitted = false;
  resultado = "";


  ngOnInit(): void {
    this.buildForm();
  }


  constructor(
              private unidadProductivaService: UnidadProductivaService, 
              private router: Router,
              private fb: FormBuilder
             ) { }

    
    submit() {
      if (this.formulario.valid){
        console.log("this.formulario.value = ", this.formulario.value);
        this.crearUnidadP();
      }else{
        this.resultado = "Hay datos inválidos en el formulario";
      }
    } 


    private buildForm() {
      this.formulario = this.fb.group({
        nombreUnidadP: ['', [Validators.required]],
        area: ['', [Validators.required]],
        coordenadas: ['', [Validators.required]],
        observacion: ['', [Validators.required]],
        profundidad: ['', [Validators.required]]
      });
    }

    get nombreUnidadPFieldInvalid(){
      return this.nombreUnidadP?.touched && this.nombreUnidadP.invalid;
    }

    get nombreUnidadP() {
      return this.formulario.get('nombreUnidadP');
    }

    get areaFieldInvalid(){
      return this.area?.touched && this.area.invalid;
    }

    get area() {
      return this.formulario.get('area');
    }

    get coordenadasFieldInvalid(){
      return this.coordenadas?.touched && this.coordenadas.invalid;
    }

    get coordenadas() {
      return this.formulario.get('coordenadas');
    }

    get observacionFieldInvalid(){
      return this.observacion?.touched && this.observacion.invalid;
    }

    get observacion() {
      return this.formulario.get('observacion');
    }

    get profundidadFieldInvalid(){
      return this.profundidad?.touched && this.profundidad.invalid;
    }

    get profundidad() {
      return this.formulario.get('profundidad');
    }

  

  crearUnidadP(): void {
    
    const unidadP = {
      nombreUnidadP: this.nombreUnidadP?.value,
      area: this.area?.value, 
      coordenadas: this.coordenadas?.value,
      observacion: this.observacion?.value,
      profundidad: this.profundidad?.value
    };

    console.log("unidadP = ", unidadP);

    this.unidadProductivaService.agregarUnidadProductiva(unidadP)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  nuevaUnidadP(): void {
    this.submitted = false;
    this.formulario.reset();
  }

}
