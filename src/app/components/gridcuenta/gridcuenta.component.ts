import { Component, Input, OnInit } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Cliente } from 'src/app/models/cliente';
import { Cuenta } from 'src/app/models/cuenta';
import { Movimiento } from 'src/app/models/movimiento';
import { CuentaService } from 'src/app/services/cuenta.service';
import { DlgMovimientoComponent } from '../dlg-movimiento/dlg-movimiento.component';

@Component({
  selector: 'gridcuenta',
  templateUrl: './gridcuenta.component.html',
  styleUrls: ['./gridcuenta.component.css']
})
export class GridcuentaComponent implements OnInit {

  @Input() public cliente: Cliente;
  cuenta:Cuenta;


  constructor(private serviceCuenta:CuentaService,private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.cliente);
  }

  openDialog(movimiento:Movimiento): void {
    const dialogRef = this.dialog.open(DlgMovimientoComponent, {
      width: '400px',
      height: '300px',
      data: movimiento
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      let index = this.cliente.cuentas.findIndex((objcuenta) => objcuenta.id == movimiento.cuenta_id);
      this.cliente.cuentas[index].saldo = result.saldo;
    });
  }

  deleteCuenta(id:number){

    this.serviceCuenta.deleteCuenta(id).subscribe(response=>{
      let index = this.cliente.cuentas.findIndex((objcuenta) => objcuenta.id == id);
      this.cliente.cuentas.splice(index,1);
      console.log(response);
    });
  }

  addCuenta(){
    this.cuenta = {
      id:0,
      cliente_id: this.cliente.id,
      numero:'',
      saldo:0
    }
    this.cliente.cuentas.push(this.cuenta);
  }

  saveCuenta(){
    this.cuenta = this.cliente.cuentas[this.cliente.cuentas.length-1];
    this.serviceCuenta.saveCuenta(this.cuenta).subscribe(response=>{
      this.cliente.cuentas[this.cliente.cuentas.length-1] = response;
      console.log(response);
    });
  }

  movCuenta(id:number){
    let movimiento = new Movimiento();
    movimiento.cuenta_id = id;
    movimiento.fecha = new Date(Date.now());
    this.openDialog(movimiento);

  }





}
