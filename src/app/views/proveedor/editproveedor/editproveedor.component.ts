import { Component, OnInit, numberAttribute } from '@angular/core';
import { Proveedor} from 'src/app/model/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoIdentificacionService } from 'src/app/services/tipo-identificacion.service';
import { TipoIdentificacion } from 'src/app/model/tipo-identificacion';
import { TipoProveedor } from 'src/app/model/tipo-proveedor';
import { TipoProveedorService } from 'src/app/services/tipo-proveedor.service';

@Component({
  selector: 'app-editproveedor',
  templateUrl: './editproveedor.component.html',
  styleUrls: ['./editproveedor.component.scss']
})
export class EditproveedorComponent implements OnInit{

  idProveedor: number;
  submitted = false;
  formulario!: FormGroup;

  tipoProveedorList: any;
  tipoIdentificacionList: any;


  constructor(
    private proveedorService: ProveedorService, 
    private tipoProveedorService: TipoProveedorService,
    private route: ActivatedRoute, 
    private router: Router,
    private tipoIdentificacionService: TipoIdentificacionService,


    ){ }

  
  ngOnInit(): void {
    this.idProveedor = Number(this.route.snapshot.paramMap.get('id'));
    this.buildForm();

    this.tipoProveedorService.obtenerTipoProveedor().subscribe((tipoProveedor: TipoProveedor[]) =>{
      this.tipoProveedorList = tipoProveedor;
    });

    this.tipoIdentificacionService.obtenerTipoIdentificacion().subscribe((tipoIdentificacion: TipoIdentificacion[]) =>{
      this.tipoIdentificacionList = tipoIdentificacion;
    });

    if(this.idProveedor !== null){
      const id = +this.idProveedor;

      this.proveedorService.obtenerProveedorPorId(id).subscribe(proveedor =>{
        this.formulario.get('nombre').setValue(proveedor.nombre);
        this.formulario.get('apellido').setValue(proveedor.apellido);
        this.formulario.get('telefono').setValue(proveedor.telefono);
        this.formulario.get('direccion').setValue(proveedor.direccion);
        this.formulario.get('correo').setValue(proveedor.correo);
        this.formulario.get('razonSocial').setValue(proveedor.razonSocial);
        this.formulario.get('tipoProveedor').setValue(proveedor.tipoProveedor.id);
        this.formulario.get('tipoIdentificacion').setValue(proveedor.tipoIdentificacion.id);
        this.formulario.get('numeroIdentificacion').setValue(proveedor.numeroIdentificacion)
        

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
      tipoProveedor: new FormControl('', Validators.required),
      tipoIdentificacion: new FormControl('', Validators.required),
      numeroIdentificacion:new FormControl('', Validators.required),
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


  get direccionFieldInvalid(){
    return this.direccion?.touched && this.direccion.invalid;
  }

  get direccion() {
    this.formulario.get('direccion')
    return this.formulario.get('direccion')
  }

    get tipoProveedorFieldInvalid() {
    return this.tipoProveedor?.touched && this.tipoProveedor.invalid;
  }

  get tipoProveedor() {
    this.formulario.get('tipoProveedor')
    return this.formulario.get('tipoProveedor');
  }

  get tipoIdentificacionFieldInvalid() {
    return this.tipoIdentificacion?.touched && this.tipoIdentificacion.invalid;
  }

  get tipoIdentificacion() {
    this.formulario.get('tipoIdentificacion')
    return this.formulario.get('tipoIdentificacion');
  }

  get numeroIdentificacionFieldInvalid() {
    return this.numeroIdentificacion?.touched && this.numeroIdentificacion.invalid;
  }

  get numeroIdentificacion() {
    this.formulario.get('numeroIdentificacion')
    return this.formulario.get('numeroIdentificacion');
  }

  guardarCambiosProveedor(): void {
    let proveedorEnviar: Proveedor = new Proveedor();

    let tipoProveedor : TipoProveedor = new TipoProveedor();
    tipoProveedor.id = this.tipoProveedor?.value;

    let tipoIdentificacion : TipoIdentificacion = new TipoIdentificacion();
    tipoIdentificacion.id = this.tipoIdentificacion?.value;



    proveedorEnviar.id = this.idProveedor;
    proveedorEnviar.nombre = this.formulario.get('nombre').value;
    proveedorEnviar.apellido = this.formulario.get('apellido').value;
    proveedorEnviar.telefono = this.formulario.get('telefono').value;
    proveedorEnviar.direccion = this.formulario.get('direccion').value;
    proveedorEnviar.correo = this.formulario.get('correo').value;
    proveedorEnviar.razonSocial = this.formulario.get('razonSocial').value;
    proveedorEnviar.tipoProveedor = tipoProveedor;
    proveedorEnviar.tipoIdentificacion = tipoIdentificacion;
    proveedorEnviar.numeroIdentificacion = this.formulario.get('numeroIdentificacion').value;


    console.log(proveedorEnviar);

    this.proveedorService.actualizarProveedor(this.idProveedor, proveedorEnviar).subscribe(

      response => {
        console.log(response);
        this.submitted = true;
        this.router.navigate(['proveedor/consultar']);
      },
      error => {
        console.log(error);
      }
    )
  }
}
