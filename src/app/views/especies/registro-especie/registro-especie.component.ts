import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EspeciesService } from 'src/app/services/especies.service';

@Component({
  selector: 'app-registro-especie',
  templateUrl: './registro-especie.component.html',
  styleUrls: ['./registro-especie.component.scss']
})
export class RegistroEspecieComponent implements OnInit{
 
 formulario!: FormGroup;
  submitted = false;
  resultado = "";

  ngOnInit(): void {
    this.buildForm();
  }


  constructor (
    private especiesService: EspeciesService,
    private router: Router,
    private fb: FormBuilder
    ) {}



    submit() {
      if(this.formulario.valid){
        console.log("this.formulario.value = ", this.formulario.value);
        this.crearEspecies();
      }else{
        this.resultado = "Hay datos invalidos en el formulario";
      }
    }

    private buildForm() {
      this.formulario = this.fb.group({
        nombreEspecie: ['', [Validators.required]]
      })
    }

    get nombreEspecieFieldvalid(){
      return this.nombreEspecie?.touched && this.nombreEspecie.invalid;
    }

    get nombreEspecie(){
      return this.formulario.get('nombreEspecie');
    }


    crearEspecies(): void {
      const especies = {
        nombreEspecie: this.nombreEspecie?.value,

      };

      console.log("especies =", especies);

      this.especiesService.agregarEspecies(especies).subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    }

    nuevaEspecie(): void {
      this.submitted = false;
      this.formulario.reset();
    }
  }
