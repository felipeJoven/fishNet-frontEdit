import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Proveedor } from 'src/app/model/proveedor';
import { TipoAlimento } from '../../../model/tipo-alimento'

import { InvEntradaAlimentoService } from 'src/app/services/inv-entrada-alimento.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { TipoAlimentoService } from 'src/app/services/tipo-alimento.service';


@Component({
  selector: 'app-registrar-entrada',
  templateUrl: './registrar-entrada.component.html',
  styleUrls: ['./registrar-entrada.component.scss'],

})
export class RegistrarEntradaComponent implements OnInit {

  // Propiedades relacionadas al formulario
  formulario!: FormGroup;

  // Listas de opciones
  submitted = false;
  resultado = "";

  ProveedorList: any;
  TipoAlimentoList: any;

  ngOnInit(): void {
    this.buildForm();

    this.proveedorService.obtenerProveedor().subscribe((proveedor: Proveedor[]) => {
      this.ProveedorList = proveedor;
    });
    this.tipoAlimentoService.obtenerTipoAlimento().subscribe((tipoAlimento: TipoAlimento[]) => {
      this.TipoAlimentoList = tipoAlimento;
    });
  }


  constructor(
    private invEntradaAlimentoService: InvEntradaAlimentoService,
    private proveedorService: ProveedorService,
    private tipoAlimentoService: TipoAlimentoService,
    private router: Router,
    private fb: FormBuilder
  ) { }


  submit() {
    if (this.formulario.valid) {
      console.log("this.formulario.value = ", this.formulario.value);
      this.crearEntradaAlimento();
    } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }


  private buildForm() {
    this.formulario = this.fb.group({
      fechaVencimiento: ['', [Validators.required]],
      numeroFactura: ['', [Validators.required]],
      registroIca: ['', [Validators.required]],
      numeroKilos: ['', [Validators.required]],
      proveedor: [0, [Validators.required]],
      tipoAlimento: [0, [Validators.required]]

    });
  }



  get fechaVencimientoFieldInvalid() {
    return this.fechaVencimiento?.touched && this.fechaVencimiento.invalid;
  }

  get fechaVencimiento() {
    return this.formulario.get('fechaVencimiento');
  }

  get numeroFacturaFieldInvalid() {
    return this.numeroFactura?.touched && this.numeroFactura.invalid;
  }

  get numeroFactura() {
    return this.formulario.get('numeroFactura');
  }

  get registroIcaFieldInvalid() {
    return this.registroIca?.touched && this.registroIca.invalid;
  }

  get registroIca() {
    return this.formulario.get('registroIca');
  }

  get numeroKilosFieldInvalid() {
    return this.numeroKilos?.touched && this.numeroKilos.invalid;
  }

  get numeroKilos() {
    return this.formulario.get('numeroKilos');
  }

  get proveedorFieldInvalid() {
    return this.proveedor?.touched && this.proveedor.invalid;
  }

  get proveedor() {
    return this.formulario.get('proveedor');
  }

  get tipoAlimentoFieldInvalid() {
    return this.tipoAlimento?.touched && this.tipoAlimento.invalid;
  }

  get tipoAlimento() {
    return this.formulario.get('tipoAlimento');
  }


  
  crearEntradaAlimento(): void {

    let proveedor: Proveedor = new Proveedor();
    proveedor.id = this.proveedor?.value;

    let tipoAlimento: TipoAlimento = new TipoAlimento();
    tipoAlimento.id = this.tipoAlimento?.value;


    const entrada = {

      fechaVencimiento: this.fechaVencimiento?.value,
      numeroFactura: this.numeroFactura?.value,
      registroIca: this.registroIca?.value,
      numeroKilos: this.numeroKilos?.value,
      tipoAlimento: tipoAlimento,
      proveedor: proveedor
    };

    console.log("entrada = ", entrada);

    this.invEntradaAlimentoService.agregarEntradaAlimentos(entrada)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  nuevoEntradaAlimento(): void {
    this.submitted = false;
    this.formulario.reset();
  }

}
