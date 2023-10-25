import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InvSalidaAlimentosService } from 'src/app/services/inv-salida-alimento.service';
import { SalidaAlimentos } from 'src/app/model/inv-salida-alimento';
import { LoteService } from 'src/app/services/lote.service';
import { Lote } from 'src/app/model/lote';

@Component({
  selector: 'app-registrar-salida',
  templateUrl: './registrar-salida.component.html',
  styleUrls: ['./registrar-salida.component.scss']
})
export class RegistrarSalidaComponent implements OnInit {

  formulario!: FormGroup;


  submitted = false;
  resultado = "";

  LoteList: any;



  constructor(
    private invSalidaAlimentosService: InvSalidaAlimentosService,
    private loteService: LoteService,
    private fb: FormBuilder
  ){}


  ngOnInit(): void {
    this.buildForm();

    this.loteService.obtenerLote().subscribe((lote: Lote[]) => {
      this.LoteList = lote;
    });
  }


  get numeroFacturaFieldInvalid(){
    return this.numeroFactura?.touched && this.numeroFactura.invalid;
  }

  get numeroFactura(){
    return this.formulario.get('numeroFactura');
  }

  get numeroKilosFieldInvalid(){
    return this.numeroKilos?.touched && this.numeroKilos.invalid;
  }

  get numeroKilos(){
    return this.formulario.get('numeroKilos');
  }

  get loteFieldInvalid(){
    return this.lote?.touched && this.lote.invalid;
  }

  get lote(){
    return this.formulario.get('lote');
  }


  private buildForm() {
    this.formulario = this.fb.group({ 
      numeroFactura: ['',[Validators.required]],
      numeroKilos: ['',[Validators.required]],
      lote: [0,[Validators.required]],
    });
  }

  submit(){
    if (this.formulario.valid){
      console.log("this.formulario.value = ", this.formulario.value);
      this.crearSalidaAlimento();
    } else {
      this.resultado = "Hay datos invalidos en el  formulario";
    }
  }

  crearSalidaAlimento():void{

    let lote: Lote = new Lote();
    lote.id = this.lote?.value;

    const salida = {
      numeroFactura: this.numeroFactura?.value,
      numeroKilos: this.numeroKilos?.value,
      lote: lote
    };

    console.log("salida = ", salida);

    this.invSalidaAlimentosService.agregarSalidaAlimentos(salida).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
    error => {
      console.log(error);
    });
  }

  nuevaSalida():void{
    this.submitted = false;
    this.formulario.reset();
  }
  
}



