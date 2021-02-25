import { Movimiento } from "./movimiento";

export interface Cuenta{

    id:number;
    cliente_id:number;
    numero:string;
    saldo:number;
    movimientos?:Movimiento[];

}
