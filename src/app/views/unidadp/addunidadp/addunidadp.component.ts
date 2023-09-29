import { Component, OnInit } from '@angular/core';
import { UnidadProductivaService } from 'src/app/services/unidad-productiva.service';
import { Validators, FormBuilder, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addunidadp',
  templateUrl: './addunidadp.component.html',
  styleUrls: ['./addunidadp.component.scss']
})
export class AddunidadpComponent implements OnInit {

  formularioEstanque!: FormGroup;

  estanque = {
    nombreUnidadP: '',
    area: '',
    coordenadas: '',
    observaciones: '',
    profundidad: '',
    fechaRegistro: '',
    available: false
  };
  submitted = false;


  constructor(
    private unidadProductivaService: UnidadProductivaService, 
    router: Router,
    private fb: FormBuilder
    ) { 
    }

    resultado = "";

    private buildForm() {
      this.formularioEstanque = this.fb.group({
        area: ['', [Validators.required]],
        nombreUnidadP: ['', [Validators.required]],
        coordenadas: ['', [Validators.required]],
        observacion: ['', [Validators.required]],
        profundidad: ['', [Validators.required]],
        fechaRegistro: ['', [Validators.required]]
      });
    }

    get nombreUnidadPFieldInvalid(){
      return this.nombreUnidadPEstanque?.touched && this.nombreUnidadPEstanque.invalid;
    }

    get nombreUnidadPEstanque() {
      return this.formularioEstanque.get('nombreUnidadP');
    }

    get areaFieldInvalid(){
      return this.areaEstanque?.touched && this.areaEstanque.invalid;
    }

    get areaEstanque() {
      return this.formularioEstanque.get('area');
    }

    get coordenadasFieldInvalid(){
      return this.coordenadasEstanque?.touched && this.coordenadasEstanque.invalid;
    }

    get coordenadasEstanque() {
      return this.formularioEstanque.get('coordenadas');
    }

    get observacionesFieldInvalid(){
      return this.observacionEstanque?.touched && this.observacionEstanque.invalid;
    }

    get observacionEstanque() {
      return this.formularioEstanque.get('observacion');
    }

    get profundidadFieldInvalid(){
      return this.profundidadEstanque?.touched && this.profundidadEstanque.invalid;
    }

    get profundidadEstanque() {
      return this.formularioEstanque.get('profundidad');
    }

    get fechaRegistroFieldInvalid(){
      return this.fechaRegistroEstanque?.touched && this.fechaRegistroEstanque.invalid;
    }

    get fechaRegistroEstanque() {
      return this.formularioEstanque.get('profundidad');
    }


    submit() {
      if (this.formularioEstanque.valid){
        console.log("this.formularioEstanque.value = ", this.formularioEstanque.value);
        this.crearUnidadP();
      }else{
        this.resultado = "Hay datos inválidos en el formulario";
      }
    }

  ngOnInit(): void {
    this.buildForm();
  }
  


  crearUnidadP(): void {
    
    const unidadP = {
      area: this.areaEstanque?.value, 
      nombreUnidadP: this.nombreUnidadPEstanque?.value,
      coordenadas: this.coordenadasEstanque?.value,
      observaciones: this.observacionEstanque?.value,
      profundidad: this.profundidadEstanque?.value,
      fechaRegistro: this.fechaRegistroEstanque?.value
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
    this.estanque = {
      nombreUnidadP: '',
      area: '',
      coordenadas: '',
      observaciones: '',
      profundidad: '',
      fechaRegistro: '',
      available: false
    };
  }

}
