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

  submitted = false;
  resultado = "";

  // Listas de opciones
  ProveedorList: any;
  TipoAlimentoList: any;


  constructor(
    private invEntradaAlimentoService: InvEntradaAlimentoService,
    private proveedorService: ProveedorService,
    private tipoAlimentoService: TipoAlimentoService,
    private router: Router,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.buildForm();

    this.proveedorService.obtenerProveedor().subscribe((proveedor: Proveedor[]) => {
      this.ProveedorList = proveedor;
    });
    this.tipoAlimentoService.obtenerTipoAlimento().subscribe((tipoAlimento: TipoAlimento[]) => {
      this.TipoAlimentoList = tipoAlimento;
    });
  }


  get fechaEntradaFieldInvalid() {
    return this.fechaEntrada?.touched && this.fechaEntrada.invalid;
  }

  get fechaEntrada() {
    return this.formulario.get('fechaEntrada');
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


  private buildForm() {
    this.formulario = this.fb.group({
      fechaEntrada: ['', [Validators.required]],
      fechaVencimiento: ['', [Validators.required]],
      numeroFactura: ['', [Validators.required]],
      registroIca: ['', [Validators.required]],
      numeroKilos: ['', [Validators.required]],
      proveedor: ['', [Validators.required]],
      tipoAlimento: ['', [Validators.required]]

    });
  }


  submit() {
    if (this.formulario.valid) {
      console.log("this.formulario.value = ", this.formulario.value);
      this.crearEntradaAlimento();
    } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }


  crearEntradaAlimento(): void {

    let proveedor: Proveedor = new Proveedor();
    proveedor.id = this.proveedor?.value;

    let tipoAlimento: TipoAlimento = new TipoAlimento();
    tipoAlimento.id = this.tipoAlimento?.value;


    const entrada = {
      fechaEntrada: this.fechaEntrada?.value,
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
