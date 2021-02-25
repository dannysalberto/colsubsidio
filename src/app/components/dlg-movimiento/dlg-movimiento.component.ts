import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Movimiento } from 'src/app/models/movimiento';
import { MovimientoService } from 'src/app/services/movimiento.service';


@Component({
  selector: 'dlg-movimiento',
  templateUrl: './dlg-movimiento.component.html',
  styleUrls: ['./dlg-movimiento.component.css']
})
export class DlgMovimientoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DlgMovimientoComponent>,

  @Inject(MAT_DIALOG_DATA) public data: Movimiento,private serviceMovimiento:MovimientoService) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("Dialogo cargado");
  }

  onNoClick(): void {
    this.serviceMovimiento.saveMovimiento(this.data).subscribe((response: any)=>{
      this.dialogRef.close(response);

    });

  }


}
