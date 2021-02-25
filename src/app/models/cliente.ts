import { Cuenta } from "./cuenta";

export interface Cliente{
    id?:number;
    nombre: string;
    direccion:string;
    telefono:string;
    cuentas?:Cuenta[];

}
