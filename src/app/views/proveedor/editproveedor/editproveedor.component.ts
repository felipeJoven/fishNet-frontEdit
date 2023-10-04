import { Component, OnInit, numberAttribute } from '@angular/core';
import { Proveedor} from 'src/app/model/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editproveedor',
  templateUrl: './editproveedor.component.html',
  styleUrls: ['./editproveedor.component.scss']
})
export class EditproveedorComponent implements OnInit{

  idProveedor: number;
  submitted = false;
  formulario!: FormGroup;


  constructor(
    private proveedorService: ProveedorService, 
    private route: ActivatedRoute, 
    private router: Router
    ){ }

  
  ngOnInit(): void {
    this.idProveedor = Number(this.route.snapshot.paramMap.get('id'));
    this.buildForm();

    if(this.idProveedor !== null){
      const id = +this.idProveedor;

      this.proveedorService.obtenerProveedorPorId(id).subscribe(proveedor =>{
        this.formulario.get('nombre').setValue(proveedor.nombre);
        this.formulario.get('apellido').setValue(proveedor.apellido);
        this.formulario.get('telefono').setValue(proveedor.telefono);
        this.formulario.get('direccion').setValue(proveedor.direccion);
        this.formulario.get('correo').setValue(proveedor.correo);
        this.formulario.get('razonSocial').setValue(proveedor.razonSocial);
        this.formulario.get('fechaRegistro').setValue(proveedor.fechaRegistro);

      })
    }
  }

  private buildForm(){
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      razonSocial: new FormControl('', Validators.required),
      fechaRegistro: new FormControl('', Validators.required),
    })

  }

  get nombreFieldInvalid(){
    return this.nombre?.touched && this.nombre.invalid;
  }

  get nombre(){
    this.formulario.get('nombre')
    return this.formulario.get('nombre')
  }

  get apellidoFieldInvalid(){
    return this.apellido?.touched && this.apellido.invalid;
  }

  get apellido() {
    this.formulario.get('apellido')
    return this.formulario.get('apellido')
  }

  get telefonoFieldInvalid(){
    return this.telefono?.touched && this.telefono.invalid;
  }

  get telefono() {
    this.formulario.get('telefono')
    return this.formulario.get('telefono')
  }
  
  get correoFieldInvalid(){
    return this.correo?.touched && this.correo.invalid;
  }

  get correo() {
    this.formulario.get('correo')
    return this.formulario.get('correo')
  }

  get razonSocialFieldInvalid(){
    return this.razonSocial?.touched && this.razonSocial.invalid;
  }

  get razonSocial() {
    this.formulario.get('razonSocial')
    return this.formulario.get('razonSocial')
  }

  get fechaRegistroFieldInvalid(){
    return this.fechaRegistro?.touched && this.fechaRegistro.invalid;
  }

  get fechaRegistro() {
    this.formulario.get('fechaRegistro')
    return this.formulario.get('fechaRegistro')
  }

  get direccionFieldInvalid(){
    return this.direccion?.touched && this.direccion.invalid;
  }

  get direccion() {
    this.formulario.get('direccion')
    return this.formulario.get('direccion')
  }

  guardarCambiosProveedor(): void {
    let proveedorEnviar: Proveedor = new Proveedor();

    proveedorEnviar.id = this.idProveedor;
    proveedorEnviar.nombre = this.formulario.get('nombre').value;
    proveedorEnviar.apellido = this.formulario.get('apellido').value;
    proveedorEnviar.telefono = this.formulario.get('telefono').value;
    proveedorEnviar.direccion = this.formulario.get('direccion').value;
    proveedorEnviar.correo = this.formulario.get('correo').value;
    proveedorEnviar.razonSocial = this.formulario.get('razonSocial').value;
    proveedorEnviar.fechaRegistro = this.formulario.get('fechaRegistro').value;

    console.log(proveedorEnviar);

    this.proveedorService.actualizarProveedor(this.idProveedor, proveedorEnviar).subscribe(

      response => {
        console.log(response);
        this.submitted = true;
        this.router.navigate['/proveedor/consultar'];
      },
      error => {
        console.log(error);
      }
    )
  }
}
