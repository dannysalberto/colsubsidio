import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimiento } from '../models/movimiento';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  _endpoint = 'http://localhost:4300/colsubsidio-ws';

  constructor(private http:HttpClient) { }

  saveMovimiento(movimiento:Movimiento){
    return this.http.post<Movimiento>(this._endpoint+'/movimiento',movimiento);
  }

}
