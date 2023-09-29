import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoAlimentoService } from 'src/app/services/tipo-alimento.service';

@Component({
  selector: 'app-tipo-alimento',
  templateUrl: './tipo-alimento.component.html',
  styleUrls: ['./tipo-alimento.component.scss']
})
export class TipoAlimentoComponent implements OnInit {

  formularioTipo!: FormGroup;

  alimento = {
    tipoAlimento: '',
    fechaRegistro:0,
    available: false
  };
  submitted = false; 

  constructor(
    private tipoAlimentoService: TipoAlimentoService, 
    router: Router,
    private fb: FormBuilder
    ) { 
    }

    resultado = "";

    private buildForm() {
      this.formularioTipo = this.fb.group({
        tipoAlimento: ['', [Validators.required]],
        fechaRegistro: ['', [Validators.required]]
      });
    }

    get tipoAlimentoFieldInvalid(){
      return this.tipoAlimentoTipo?.touched && this.tipoAlimentoTipo.invalid;
    }

    get tipoAlimentoTipo() {
      return this.formularioTipo.get('tipoAlimento');
    }

    get fechaRegistroFieldInvalid(){
      return this.fechaRegistroTipo?.touched && this.fechaRegistroTipo.invalid;
    }

    get fechaRegistroTipo() {
      return this.formularioTipo.get('fechaRegistro');
    }


    submit() {
      if (this.formularioTipo.valid){
        console.log("this.formularioTipo.value = ", this.formularioTipo.value);
        this.crearTipoAlimento();
      }else{
        this.resultado = "Hay datos inválidos en el formulario";
      }
    }


    ngOnInit(): void {
      this.buildForm();
    }
      

    
    crearTipoAlimento():void {
      const comida = {
      tipoAlimento: this.tipoAlimentoTipo?.value,
      fechaRegistro: this.fechaRegistroTipo?.value         
  
    };

    console.log("comida = ", comida);
  
      this.tipoAlimentoService.agregarTipoAlimento(comida)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          error => {
            console.log(error);
          });          
    }

    nuevoTipoAlimento(): void {
      this.submitted = false;
      this.alimento = {
        tipoAlimento:'',
        fechaRegistro:0,    
        available: false,
    };
    }

}
