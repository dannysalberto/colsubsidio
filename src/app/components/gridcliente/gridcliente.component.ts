import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import {Router} from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-gridcliente',
  templateUrl: './gridcliente.component.html',
  styleUrls: ['./gridcliente.component.css']
})
export class GridclienteComponent implements OnInit {

  clientes : Cliente[];
  cliente : Cliente;

  constructor(private clienteService:ClienteService, private router:Router) {
    console.log("componenre creado");
    this.populateGrid();

  }

  ngOnInit(): void {

  }

  populateGrid():void{
    this.clienteService.getClientes().subscribe((response: any)=>{
      this.clientes=response;
      console.log(this.clientes.length);

    });
  }

  deleteCliente(id:number):void{
    this.clienteService.deleteCliente(id).subscribe((response: any)=>{
      this.populateGrid();
    });

  }

  getCliente(id:number):any{
    this.clienteService.getCliente(id).subscribe((response: any)=>{
      this.cliente = response;
      console.log(this.cliente);
      this.router.navigate(['cliente/'+id]);
    });

  }


}
