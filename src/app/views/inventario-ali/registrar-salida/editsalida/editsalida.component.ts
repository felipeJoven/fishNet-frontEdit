import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalidaAlimentos } from 'src/app/model/inv-salida-alimento';
import { Lote } from 'src/app/model/lote';
import { InvSalidaAlimentosService } from 'src/app/services/inv-salida-alimento.service';
@Component({
  selector: 'app-editsalida',
  templateUrl: './editsalida.component.html',
  styleUrls: ['./editsalida.component.scss']
})
export class EditSalidaComponent implements OnInit{

  idSalidaAli: number;
  submitted = false;
  formulario!: FormGroup;

  constructor(
    private invSalidaAlimentosService : InvSalidaAlimentosService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.idSalidaAli = Number(this.route.snapshot.paramMap.get('id'));
    this.buildForm();

    if (this.idSalidaAli !== null){
      const id = +this.idSalidaAli;

      this.invSalidaAlimentosService.obtenerSalidaAlimentosPorId(id).subscribe(salidaAli => {
        this.formulario.get('numeroFactura').setValue(salidaAli.numeroFactura);
        this.formulario.get('numeroKilos').setValue(salidaAli.numeroKilos);
        this.formulario.get('fechaSalida').setValue(salidaAli.fechaSalida);
        this.formulario.get('lote').setValue(salidaAli.lote);

      });
    }
  }
  private buildForm() {
    this.formulario = new FormGroup({
      numeroFactura: new FormControl('', Validators.required),
      numeroKilos: new FormControl('', Validators.required),
      fechaSalida: new FormControl('', Validators.required),
      lote: new FormControl('', Validators.required),
    });
  }

  get numeroFacturaFieldInvalid() {
    return this.numeroFactura?.touched && this.numeroFactura.invalid;
  }

  get numeroFactura(){
    this.formulario.get('numeroFactura')
    return this.formulario.get('numeroFactura')
  }
  get numeroKilosFieldInvalid() {
    return this.numeroKilos?.touched && this.numeroKilos.invalid;
  }

  get numeroKilos(){
    this.formulario.get('numeroKilos')
    return this.formulario.get('numeroKilos')
  }
  get fechaSalidaFieldInvalid() {
    return this.fechaSalida?.touched && this.fechaSalida.invalid;
  }

  get fechaSalida(){
    this.formulario.get('fechaSalida')
    return this.formulario.get('fechaSalida')
  }
  get loteFieldInvalid() {
    return this.lote?.touched && this.lote.invalid;
  }

  get lote(){
    this.formulario.get('lote')
    return this.formulario.get('lote')
  }

  guardarCambiosSalidaAli(): void {
    
    let salidaAliEnviar: SalidaAlimentos = new SalidaAlimentos();
    

    salidaAliEnviar.numeroFactura = this.formulario.get('numeroFactura').value;
    salidaAliEnviar.numeroKilos = this.formulario.get('numeroKilos').value;
    salidaAliEnviar.fechaSalida = this.formulario.get('fechaSalida').value;
    salidaAliEnviar.lote = this.formulario.get('lote').value;

    this.invSalidaAlimentosService.actualizarSalidaAlimentos(this.idSalidaAli, salidaAliEnviar).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        this.router.navigate(['/inventario/consultar-salida'])
      },
      error => {
        console.log(error)
      }
    )

  }
}
