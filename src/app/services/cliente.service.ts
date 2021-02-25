import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  _endpoint = 'http://localhost:4300/colsubsidio-ws';

  constructor(private http:HttpClient) {
    console.log("Ejecutando servicio");
  }

  getClientes(){
    let header = new HttpHeaders().set('Type-contenet','application/json');
    return this.http.get<Cliente[]>(this._endpoint+'/cliente/list',{headers: header} );

  }

  saveCliente(cliente:Cliente){
    return this.http.post<Cliente>(this._endpoint+'/cliente',cliente);
  }

  deleteCliente(id:number){
    return this.http.delete(this._endpoint+'/cliente/'+id);
  }

  getCliente(id:number):Observable<Cliente>{
    let header = new HttpHeaders().set('Type-contenet','application/json');
    return this.http.get<Cliente>(this._endpoint+'/cliente/'+id,{headers: header});
  }

}
