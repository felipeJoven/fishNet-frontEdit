import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-addproveedor',
  templateUrl: './addproveedor.component.html',
  styleUrls: ['./addproveedor.component.scss']
})
export class AddproveedorComponent implements OnInit {

  formularioCliente!: FormGroup;

  cliente = {
    codigo: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    direccion: '',
    razonSocial: '',
    tipoProveedor: '',
    tipoIdentificacion: '',
    fechaRegistro: '',
    available: false
  };
  submitted = false;

  constructor(
    private proveedorService: ProveedorService, 
    router: Router,
    private fb: FormBuilder
    ) { 
    }

    resultado = "";

    private buildForm() {
      this.formularioCliente = this.fb.group({
        codigo: ['', [Validators.required]],
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        telefono: ['', [Validators.required]],
        correo: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
        razonSocial: ['', [Validators.required]],
        tipoProveedor: ['', [Validators.required]],
        tipoIdentificacion: ['', [Validators.required]],
        fechaRegistro: ['', [Validators.required]],
      });
    }

    get codigoFieldInvalid(){
      return this.codigoCliente?.touched && this.codigoCliente.invalid;
    }

    get codigoCliente() {
      return this.formularioCliente.get('codigo');
    }

    get nombreFieldInvalid(){
      return this.nombreCliente?.touched && this.nombreCliente.invalid;
    }

    get nombreCliente() {
      return this.formularioCliente.get('nombre');
    }

    get apellidoFieldInvalid(){
      return this.apellidoCliente?.touched && this.apellidoCliente.invalid;
    }

    get apellidoCliente() {
      return this.formularioCliente.get('apellido');
    }

    get telefonoFieldInvalid(){
      return this.telefonoCliente?.touched && this.telefonoCliente.invalid;
    }

    get telefonoCliente() {
      return this.formularioCliente.get('telefono');
    }

    get correoFieldInvalid(){
      return this.correoCliente?.touched && this.correoCliente.invalid;
    }

    get correoCliente() {
      return this.formularioCliente.get('correo');
    }

    get direccionFieldInvalid(){
      return this.direccionCliente?.touched && this.direccionCliente.invalid;
    }

    get direccionCliente() {
      return this.formularioCliente.get('direccion');
    }

    get razonSocialFieldInvalid(){
      return this.razonSocialCliente?.touched && this.razonSocialCliente.invalid;
    }

    get razonSocialCliente() {
      return this.formularioCliente.get('razonSocial');
    }

    get tipoProveedorFieldInvalid(){
      return this.tipoProveedorCliente?.touched && this.tipoProveedorCliente.invalid;
    }

    get tipoProveedorCliente() {
      return this.formularioCliente.get('tipoProveedor');
    }

    get tipoIdentificacionFieldInvalid(){
      return this.tipoIdentificacionCliente?.touched && this.tipoIdentificacionCliente.invalid;
    }

    get tipoIdentificacionCliente() {
      return this.formularioCliente.get('tipoIdentificacion');
    }

    get fechaRegistroFieldInvalid(){
      return this.fechaRegistroCliente?.touched && this.fechaRegistroCliente.invalid;
    }

    get fechaRegistroCliente() {
      return this.formularioCliente.get('fechaRegistro');
    }


    submit() {
      if (this.formularioCliente.valid){
        console.log("this.formularioCliente.value = ", this.formularioCliente.value);
        this.crearProveedor();
      }else{
        this.resultado = "Hay datos inválidos en el formulario";
      }
    }

    ngOnInit(): void {
      this.buildForm();
    }


    crearProveedor(): void {
    
      const proveedor = {
        codigo: this.codigoCliente?.value,
        nombre: this.nombreCliente?.value,
        apellido: this.apellidoCliente?.value,
        telefono: this.telefonoCliente?.value,
        correo: this.correoCliente?.value,
        direccion: this.direccionCliente?.value,
        razonSocial: this.razonSocialCliente?.value,
        tipoProveedor: this.tipoProveedorCliente?.value,
        tipoIdentificacion: this.tipoIdentificacionCliente?.value,
        fechaRegistro: this.fechaRegistroCliente?.value        
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
      this.cliente = {
        codigo: '',
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        direccion: '',
        razonSocial: '',
        tipoProveedor: '',
        tipoIdentificacion: '',
        fechaRegistro: '',
        available: false
      };
    }
  

}
