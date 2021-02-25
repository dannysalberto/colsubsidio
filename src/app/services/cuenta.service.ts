import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from '../models/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  _endpoint = 'http://localhost:4300/colsubsidio-ws';

  constructor(private http:HttpClient) {
    console.log("Ejecutando servicio");
  }


  saveCuenta(cuenta:Cuenta){
    return this.http.post<Cuenta>(this._endpoint+'/cuenta',cuenta);
  }

  deleteCuenta(id:number){
    return this.http.delete(this._endpoint+'/cuenta/'+id);
  }

  getCliente(id:number):Observable<Cuenta>{
    let header = new HttpHeaders().set('Type-contenet','application/json');
    return this.http.get<Cuenta>(this._endpoint+'/cuenta/'+id,{headers: header});
  }

}
