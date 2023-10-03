import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor} from 'src/app/model/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {
    
  proveedor: Proveedor[] = [];
  /* proveedorpr: Proveedor= {
    id: 0,
    codigo:'',
    nombre:'',
    apellido:'',
    telefono:0,
    correo:'',
    direccion:'',
    razonSocial: 0,
    tipoProveedor: '',
    tipoIdentificacion:'',
    fechaRegistro:''
    } */

    constructor(
                private proveedorService: ProveedorService, 
                private dialog: MatDialog, private route: ActivatedRoute, 
                private router: Router
                ) 
                { }

    ngOnInit(): void {
      this.obtenerProveedor();
    }

      // Servicios

    obtenerProveedor():void{
    this.proveedorService.obtenerProveedor().subscribe(proveedor => {

      this.proveedor = proveedor;
      console.log(this.proveedor);
      
    });
  }
  
  editarProveedor(id: number):void{
    console.log(id);
    this.router.navigate(['editar-proveedor', id]);
  }

  eliminarProveedor(id: number) {
    this.proveedorService.eliminarProveedor(id)
    .subscribe(respuesta => {
      console.log(respuesta);
      this.obtenerProveedor();
    });
    
  }

}
