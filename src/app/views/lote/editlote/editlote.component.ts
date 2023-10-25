import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Especies } from 'src/app/model/especies';
import { Lote } from 'src/app/model/lote';
import { Proveedor } from 'src/app/model/proveedor';
import { UnidadProductiva } from 'src/app/model/unidad-productiva';
import { EspeciesService } from 'src/app/services/especies.service';
import { LoteService } from 'src/app/services/lote.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { UnidadProductivaService } from 'src/app/services/unidad-productiva.service';

@Component({
  selector: 'app-editlote',
  templateUrl: './editlote.component.html',
  styleUrls: ['./editlote.component.scss']
})
export class EditloteComponent implements OnInit {

  // Listas de opciones
  EspeciesList: any;
  ProveedorList: any;
  UnidadPList: any;

  lote: Lote;
  idLote: number;
  submitted = false;
  formulario!: FormGroup;

    constructor(
      private loteService: LoteService,
      private especiesService: EspeciesService,
      private proveedorService: ProveedorService,
      private unidadProductivaService: UnidadProductivaService,
      private route: ActivatedRoute,
      private router: Router,
    ){}

    ngOnInit(): void {
   this.idLote = Number(this.route.snapshot.paramMap.get('id'));
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


  if(this.idLote !== null){
    const id = +this.idLote;

    this.loteService.obtenerLotePorId(id).subscribe(lote =>{
      console.log(lote);
      
      this.formulario.get('nombreLote').setValue(lote.nombreLote);
      this.formulario.get('numeroAnimales').setValue(lote.numeroAnimales);
      this.formulario.get('proveedor').setValue(lote.proveedor.id);
      this.formulario.get('especies').setValue(lote.especies.id);
      this.formulario.get('unidadP').setValue(lote.unidadP.id);
    })
  }

}


private buildForm() {
  this.formulario = new FormGroup({
    nombreLote: new FormControl('', Validators.required),
    numeroAnimales: new FormControl('', Validators.required),
    proveedor: new FormControl('', Validators.required),
    especies: new FormControl('', Validators.required),
    unidadP: new FormControl('', Validators.required)
  });
}

get nombreLote(){
  this.formulario.get('nombreLote')
  return this.formulario.get('nombreLote')
}

get nombreLoteFieldInvalid(){
  return this.nombreLote?.touched && this.nombreLote.invalid;
}

get numeroAnimales(){
  this.formulario.get('numeroAnimales')
  return this.formulario.get('numeroAnimales')
}

get numeroAnimalesFieldInvalid(){
  return this.numeroAnimales?.touched && this.numeroAnimales.invalid;
}
get proveedor(){
  this.formulario.get('proveedor')
  return this.formulario.get('proveedor');
}

get proveedorFieldInvalid(){
  return this.proveedor?.touched && this.proveedor.invalid;
}


get especies(){
  this.formulario.get('especies')
  return this.formulario.get('especies');
}

get especiesFieldInvalid(){
  return this.especies?.touched && this.especies.invalid;
}

get unidadP(){
  this.formulario.get('unidadP')
  return this.formulario.get('unidadP');
}

get unidadPFieldInvalid(){
  return this.unidadP?.touched && this.unidadP.invalid;
}



  guardarCambiosLote(): void {

    let loteEnviar: Lote = new Lote();

    let proveedor: Proveedor = new Proveedor();
    proveedor.id = this.proveedor?.value;

    let especies: Especies = new Especies();
    especies.id = this.especies?.value;

    let unidadP: UnidadProductiva = new UnidadProductiva();
    unidadP.id = this.unidadP?.value;

    loteEnviar.id = this.idLote;
    loteEnviar.nombreLote = this.formulario.get('nombreLote').value;
    loteEnviar.numeroAnimales = this.formulario.get('numeroAnimales').value;
    loteEnviar.proveedor = proveedor;
    loteEnviar.especies = especies;
    loteEnviar.unidadP = unidadP;
    
    this.loteService.actualizarLote(this.idLote, loteEnviar).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        this.router.navigate(['/lote/consultar-lote']);
      },
      error => {
        console.log(error);
      });
  }
}
