import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoAlimentoService } from 'src/app/services/tipo-alimento.service';

@Component({
  selector: 'app-addalimento',
  templateUrl: './addalimento.component.html',
  styleUrls: ['./addalimento.component.scss']
})
export class TipoAlimentoComponent implements OnInit {
 
  // Propiedades relacionadas al formulario
  formulario!: FormGroup;

 // Listas de opciones
  submitted = false; 
  resultado = "";

  ngOnInit(): void {
    this.buildForm();
  }


  constructor(
    private tipoAlimentoService: TipoAlimentoService, 
    router: Router,
    private fb: FormBuilder
    ) { 
    }

      
  submit() {
    if (this.formulario.valid){
      console.log("this.formulario.value = ", this.formulario.value);
      this.crearTipoAlimento();
    }else{
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

    private buildForm() {
      this.formulario = this.fb.group({
        tipoAlimento: ['', [Validators.required]]
      });
    }

    get tipoAlimentoFieldInvalid(){
      return this.tipoAlimento?.touched && this.tipoAlimento.invalid;
    }

    get tipoAlimento() {
      return this.formulario.get('tipoAlimento');
    }
    


    crearTipoAlimento():void {
      const comida = {
      tipoAlimento: this.tipoAlimento?.value,
    
  
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
      this.formulario.reset();
    }

}
