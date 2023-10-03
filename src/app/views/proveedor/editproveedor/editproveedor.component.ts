import { Component, OnInit, numberAttribute } from '@angular/core';
import { Proveedor} from 'src/app/model/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoProveedor } from 'src/app/model/tipo-proveedor';
import { TipoIdentificacion } from 'src/app/model/tipo-identificacion';

@Component({
  selector: 'app-editproveedor',
  templateUrl: './editproveedor.component.html',
  styleUrls: ['./editproveedor.component.scss']
})
export class EditproveedorComponent implements OnInit{
  proveedor: Proveedor= {
    id : 0,    
    nombre : '',
    apellido : '',
    telefono : 0,
    correo : '',
    direccion : '',
    razonSocial: 0,
    tipoProveedor: new TipoProveedor,
    tipoIdentificacion: new TipoIdentificacion,
    fechaRegistro : new Date
  }

  constructor(private proveedorService: ProveedorService, private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    const idProveedor= this.route.snapshot.paramMap.get('id');

    if(idProveedor!== null){
      const id = +idProveedor;

      this.proveedorService.obtenerProveedorPorId(id).subscribe(proveedor =>{
        this.proveedor = proveedor;
      });
    }
  }

 
  guardarCambiosProveedor(): void {
    this.proveedorService.actualizarProveedor(this.proveedor.id, this.proveedor).subscribe(() => {
      this.router.navigate(['proveedor/consultar']);
    });
  }

}
