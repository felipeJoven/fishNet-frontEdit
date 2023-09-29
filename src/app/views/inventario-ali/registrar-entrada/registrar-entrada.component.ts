import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { InvEntradaAlimentoService } from 'src/app/services/inv-entrada-alimento.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { TipoAlimentoService } from 'src/app/services/tipo-alimento.service';
import { TipoAlimento} from '../../../model/tipo-alimento'
import { Proveedor } from 'src/app/model/proveedor';


@Component({
  selector: 'app-registrar-entrada',
  templateUrl: './registrar-entrada.component.html',
  styleUrls: ['./registrar-entrada.component.scss'],

})
export class RegistrarEntradaComponent implements OnInit {

  formularioEntrada!: FormGroup;

  entrada = {
    fecha:0,
    fechaVencimiento:0,
    numeroFactura:0,
    registroIca:"",
    numeroKilos:0,
    available: false
  };
  submitted = false; 
  ProveedorList: any;
  TipoAlimentoList: any;


  constructor(
    private invEntradaAlimentoService: InvEntradaAlimentoService, 
    private proveedorService: ProveedorService,
    private tipoAlimentoService: TipoAlimentoService,
    router: Router,
    private fb: FormBuilder
    ) { }

    resultado = "";

    private buildForm() {
      this.formularioEntrada = this.fb.group({
        fecha: ['', [Validators.required]],
        fechaVencimiento: ['', [Validators.required]],
        numeroFactura: ['', [Validators.required]],
        registroIca: ['', [Validators.required]],
        numeroKilos: ['', [Validators.required]],
        proveedor: ['', [Validators.required]],
        tipoAlimento: ['', [Validators.required]]
        
      });
    }

    get fechaFieldInvalid(){
      return this.fechaEntrada?.touched && this.fechaEntrada.invalid;
    }

    get fechaEntrada() {
      return this.formularioEntrada.get('fecha');
    }

    get fechaVencimientoFieldInvalid(){
      return this.fechaVencimientoEntrada?.touched && this.fechaVencimientoEntrada.invalid;
    }

    get fechaVencimientoEntrada() {
      return this.formularioEntrada.get('fechaVencimiento');
    }

    get numeroFacturaFieldInvalid(){
      return this.numeroFacturaEntrada?.touched && this.numeroFacturaEntrada.invalid;
    }

    get numeroFacturaEntrada() {
      return this.formularioEntrada.get('numeroFactura');
    }

    get registroIcaFieldInvalid(){
      return this.registroIcaEntrada?.touched && this.registroIcaEntrada.invalid;
    }

    get registroIcaEntrada() {
      return this.formularioEntrada.get('registroIca');
    }

    get numeroKilosFieldInvalid(){
      return this.numeroKilosEntrada?.touched && this.numeroKilosEntrada.invalid;
    }

    get numeroKilosEntrada() {
      return this.formularioEntrada.get('numeroKilos');
    }

    get proveedorFieldInvalid(){
      return this.proveedorEntrada?.touched && this.proveedorEntrada.invalid;
    }

    get proveedorEntrada() {
      return this.formularioEntrada.get('proveedor');
    }

    get tipoAlimentoFieldInvalid(){
      return this.tipoAlimentoEntrada?.touched && this.tipoAlimentoEntrada.invalid;
    }

    get tipoAlimentoEntrada() {
      return this.formularioEntrada.get('tipoAlimento');
    }


    submit() {
      if (this.formularioEntrada.valid){
        console.log("this.formularioEntrada.value = ", this.formularioEntrada.value);
        this.crearEntradaAlimento();
      }else{
        this.resultado = "Hay datos inválidos en el formulario";
      }
    }

    ngOnInit(): void {
      this.buildForm();
      this.proveedorService.obtenerProveedor().subscribe((proveedor:Proveedor[]) => {
        this.ProveedorList=proveedor;
      });
      this.tipoAlimentoService.obtenerTipoAlimento().subscribe((tipoAlimento:TipoAlimento[]) => {
        this.TipoAlimentoList=tipoAlimento;
      });
    }

    crearEntradaAlimento():void {
      
      let tipoAlimento: TipoAlimento= new TipoAlimento();
      tipoAlimento.id = this.tipoAlimentoEntrada?.value;

      let proveedor: Proveedor= new Proveedor();
      proveedor.id = this.proveedorEntrada?.value;
      
      
      const entradaInv = {
        fecha: this.fechaEntrada?.value,      
        fechaVencimiento: this.fechaVencimientoEntrada?.value,      
        numeroFactura: this.numeroFacturaEntrada?.value,
        registroIca: this.registroIcaEntrada?.value,
        numeroKilos: this.numeroKilosEntrada?.value,
        tipoAlimento: tipoAlimento,
        proveedor: proveedor
    };

    console.log("entradaInv = ", entradaInv);
  
      this.invEntradaAlimentoService.agregarEntradaAlimentos(entradaInv)
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
      this.entrada = {
        fecha:0,
        fechaVencimiento:0,
        numeroFactura:0,
        registroIca:"",
        numeroKilos:0,
        available: false,
    };
    }

}
