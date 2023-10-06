import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Especies } from 'src/app/model/especies';
import { Proveedor } from 'src/app/model/proveedor';
import { UnidadProductiva } from 'src/app/model/unidad-productiva';

import { LoteService } from 'src/app/services/lote.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { EspeciesService } from 'src/app/services/especies.service';
import { UnidadProductivaService } from 'src/app/services/unidad-productiva.service';


@Component({
  selector: 'app-addlote',
  templateUrl: './addlote.component.html',
  styleUrls: ['./addlote.component.scss']
})
export class AddLoteComponent implements OnInit{
  
//Propiedades relacionadas al form
  formulario!: FormGroup;


  //lista de opciones
  submitted = false;
  resultado = "";
  
  // Listas de opciones
  EspeciesList: any;
  ProveedorList: any;
  UnidadPList: any;


  constructor(
    private loteService: LoteService,
    private especiesService: EspeciesService,
    private proveedorService: ProveedorService,
    private unidadProductivaService: UnidadProductivaService,
    private router: Router,
    private fb: FormBuilder
  ){}


  ngOnInit(): void {
    this.buildForm();

    this.especiesService.obtenerEspecies().subscribe((especies: Especies[]) => {
      this.EspeciesList = especies;
    });
    this.proveedorService.obtenerProveedor().subscribe((proveedor: Proveedor[]) =>{
      this.ProveedorList = proveedor;
    });
    this.unidadProductivaService.obtenerUnidadProductiva().subscribe((unidadP: UnidadProductiva[]) => {
      this.UnidadPList = unidadP;
    });
  }
  

  get nombreLoteFieldInvalid(){
    return this.nombreLote?.touched && this.nombreLote.invalid;
  }
  get nombreLote(){
    return this.formulario.get('nombreLote');
  }

  get fechaSiembraFieldInvalid(){
    return this.fechaSiembra?.touched && this.fechaSiembra.invalid;
  }

  get fechaSiembra(){
    return this.formulario.get('fechaSiembra');
  }

  get diasCultivoFieldInvalid(){
    return this.diasCultivo?.touched && this.diasCultivo.invalid;
  }

  get diasCultivo(){
    return this.formulario.get('diasCultivo');
  }

  get numeroAnimalesFieldInvalid(){
    return this.numeroAnimales?.touched && this.numeroAnimales.invalid;
  }

  get numeroAnimales(){
    return this.formulario.get('numeroAnimales');
  }

  get proveedorFieldInvalid(){
    return this.proveedor?.touched && this.proveedor.invalid;
  }

  get proveedor(){
    return this.formulario.get('proveedor');
  }

  get especiesFieldInvalid(){
    return this.especies?.touched && this.especies.invalid;
  }

  get especies(){
    return this.formulario.get('especies');
  }

  get unidadPFieldInvalid(){
    return this.unidadP?.touched && this.unidadP.invalid;
  }

  get unidadP(){
    return this.formulario.get('unidadP');
  }


  private buildForm() {
    this.formulario = this.fb.group({
      nombreLote: ['', [Validators.required]],
      fechaSiembra: ['', [Validators.required]],
      diasCultivo: ['', [Validators.required]],
      numeroAnimales: ['', [Validators.required]],
      proveedor: ['', [Validators.required]],
      especies: ['', [Validators.required]],
      unidadP: ['', [Validators.required]]
    });
  }


  submit(){
    if (this.formulario.valid){
      console.log("this.formulario.value = ", this.formulario.value);
      this.crearLote();
    }else{
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }
  

  crearLote(): void{

    let proveedor: Proveedor = new Proveedor();
    proveedor.id = this.proveedor?.value;

    let especies: Especies = new Especies();
    especies.id = this.especies?.value;

    let unidadP: UnidadProductiva = new UnidadProductiva();
    unidadP.id = this.unidadP?.value;


    const lote = {
      nombreLote: this.nombreLote?.value,
      fechaSiembra: this.fechaSiembra?.value,
      diasCultivo: this.diasCultivo?.value,
      numeroAnimales: this.numeroAnimales?.value,
      proveedor: proveedor,
      especies: especies,
      unidadP: unidadP
    } ;

    console.log("lote = ", lote);

    this.loteService.agregarLote(lote)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  nuevoLote(): void {
    this.submitted = false;
    this.formulario.reset();
  }

}
