import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TipoIdentificacion } from 'src/app/model/tipo-identificacion';
import { TipoProveedor } from 'src/app/model/tipo-proveedor';

import { ProveedorService } from 'src/app/services/proveedor.service';
import { TipoIdentificacionService } from 'src/app/services/tipo-identificacion.service';
import { TipoProveedorService } from 'src/app/services/tipo-proveedor.service';

@Component({
  selector: 'app-addproveedor',
  templateUrl: './addproveedor.component.html',
  styleUrls: ['./addproveedor.component.scss']
})
export class AddproveedorComponent implements OnInit {

  // Propiedades relacionadas al formulario
  formulario!: FormGroup;

  submitted = false;
  resultado = "";

  // Listas de opciones
  tipoProveedorList: any;
  tipoIdentificacionList: any;


  constructor(
    private proveedorService: ProveedorService,
    private tipoProveedorService: TipoProveedorService,
    private tipoIdentificacionService: TipoIdentificacionService,
    router: Router,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.buildForm();

    this.tipoProveedorService.obtenerTipoProveedor().subscribe((tipoProveedor: TipoProveedor[]) => {
      this.tipoProveedorList = tipoProveedor;
    });
    this.tipoIdentificacionService.obtenerTipoIdentificacion().subscribe((tipoIdentificacion: TipoIdentificacion[]) => {
      this.tipoIdentificacionList = tipoIdentificacion;
    });
  }


  get nombreFieldInvalid() {
    return this.nombre?.touched && this.nombre.invalid;
  }

  get nombre() {
    return this.formulario.get('nombre');
  }

  get apellidoFieldInvalid() {
    return this.apellido?.touched && this.apellido.invalid;
  }

  get apellido() {
    return this.formulario.get('apellido');
  }

  get telefonoFieldInvalid() {
    return this.telefono?.touched && this.telefono.invalid;
  }

  get telefono() {
    return this.formulario.get('telefono');
  }

  get correoFieldInvalid() {
    return this.correo?.touched && this.correo.invalid;
  }

  get correo() {
    return this.formulario.get('correo');
  }

  get direccionFieldInvalid() {
    return this.direccion?.touched && this.direccion.invalid;
  }

  get direccion() {
    return this.formulario.get('direccion');
  }

  get razonSocialFieldInvalid() {
    return this.razonSocial?.touched && this.razonSocial.invalid;
  }

  get razonSocial() {
    return this.formulario.get('razonSocial');
  }

  get tipoProveedorFieldInvalid() {
    return this.tipoProveedor?.touched && this.tipoProveedor.invalid;
  }

  get tipoProveedor() {
    return this.formulario.get('tipoProveedor');
  }

  get tipoIdentificacionFieldInvalid() {
    return this.tipoIdentificacion?.touched && this.tipoIdentificacion.invalid;
  }

  get tipoIdentificacion() {
    return this.formulario.get('tipoIdentificacion');
  }

  get numeroIdentificacionFieldInvalid() {
    return this.numeroIdentificacion?.touched && this.numeroIdentificacion.invalid;
  }

  get numeroIdentificacion() {
    return this.formulario.get('numeroIdentificacion');
  }
  

  private buildForm() {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      razonSocial: ['', [Validators.required]],
      tipoProveedor: [0, [Validators.required]],
      tipoIdentificacion: [0, [Validators.required]],
      numeroIdentificacion: ['', [Validators.required]]
    });
  }


  submit() {
    if (this.formulario.valid) {
      console.log("this.formulario.value = ", this.formulario.value);
      this.crearProveedor();
    } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }


  crearProveedor(): void {

    let tipoProveedor: TipoProveedor = new TipoProveedor();
    tipoProveedor.id = this.tipoProveedor?.value;

    let tipoIdentificacion: TipoIdentificacion = new TipoIdentificacion();
    tipoIdentificacion.id = this.tipoIdentificacion?.value;


    const proveedor = {
      nombre: this.nombre?.value,
      apellido: this.apellido?.value,
      telefono: this.telefono?.value,
      correo: this.correo?.value,
      direccion: this.direccion?.value,
      razonSocial: this.razonSocial?.value,
      tipoProveedor: tipoProveedor,
      tipoIdentificacion: tipoIdentificacion,
      numeroIdentificacion: this.numeroIdentificacion?.value
    };

    console.log("proveedor = ", proveedor);

    this.proveedorService.agregarProveedor(proveedor)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  nuevoProveedor(): void {
    this.submitted = false;
    this.formulario.reset();
  }

}
