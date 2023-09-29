import { Proveedor } from "./proveedor";
import { TipoAlimento } from "./tipo-alimento";

export class EntradaAlimentos {
id: number;
fechaEntrada: number;
fechaVencimiento:number;
numeroFactura: number;
registroIca: string;
numeroKilos: number;
tipoAlimento: TipoAlimento;
proveedor: Proveedor;
}