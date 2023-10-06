import { Especies } from "./especies";
import { Proveedor } from "./proveedor";
import { UnidadProductiva } from "./unidad-productiva";

export class Lote {
    id: number;
    nombreLote: string;
    fechaSiembra: Date;
    diasCultivo: string;
    numeroAnimales: string;
    proveedor: Proveedor;
    unidadP: UnidadProductiva;
    especies: Especies;
    }
    