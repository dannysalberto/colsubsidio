export class Movimiento {

    id?:number;
    cuenta_id:number;
    tipo:number; //1 debito //2 credito
    fecha:Date;
    valor:number;
    saldo?:number; //Transient

}
