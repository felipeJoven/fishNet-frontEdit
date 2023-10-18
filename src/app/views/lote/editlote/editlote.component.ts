import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoteService } from 'src/app/services/lote.service';

@Component({
  selector: 'app-editlote',
  templateUrl: './editlote.component.html',
  styleUrls: ['./editlote.component.scss']
})
export class EditloteComponent implements OnInit {

    idLote: number;
    submitted = false;
    formulario!: FormGroup;

    constructor(
      private loteService: LoteService,
      private route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder
    ){}

    ngOnInit(): void {
      this.idLote = Number(this.route.snapshot.paramMap.get('id'));
      this.buildForm();


      if (this.idLote !== null){
        const id = +this.idLote;


        this.loteService.obtenerLotePorId(id).subscribe(lote => {
          this.formulario.get('nombreEspecie').setValue(lote.nombreLote);
          this.formulario.get('fechaSiembra').setValue(lote.fechaSiembra);
          this.formulario.get('diasCultivo').setValue(lote.diasCultivo);
        });
      }
    }

    private buildForm(){
      this.formulario = new FormGroup({
        nombreLote: new FormControl('', Validators.required),
        fechaSiembra: new FormControl('', Validators.required),
        diasCultivo: new FormControl('', Validators.required),
      })
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
}
