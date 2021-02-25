import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Reporte } from 'src/app/models/reporte';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReporteService } from 'src/app/services/reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor(private reporteService:ReporteService,private clienteService:ClienteService) {

  }

  reporte:Reporte[];
  clientes:Cliente[];

  idcliente:number;
  fechadesde:Date;
  fechahasta:Date;

  ngOnInit(): void {
    this.populateCliente();

  }

  populateReporte():void{
    this.reporteService.getReporte(this.idcliente,this.fechadesde,this.fechahasta).subscribe((response: any)=>{
      this.reporte=response;
      console.log(this.reporte);

    });
  }

  populateCliente():void{
    this.clienteService.getClientes().subscribe((response: any)=>{
      this.clientes=response;
      console.log(this.clientes);
    });
  }

}
