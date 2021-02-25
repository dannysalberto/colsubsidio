import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporte } from '../models/reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  _endpoint = 'http://localhost:4300/colsubsidio-ws';

  constructor(private http:HttpClient) {
    console.log("Ejecutando servicio");
  }

  getReporte(idcliente:number,fechadesde:Date,fechahasta:Date){
    return this.http.post<Reporte[]>(this._endpoint+'/cliente/reporte',
      {'cliente_id':idcliente,'fechaDesde':fechadesde,'fechaHasta':fechahasta} );

  }
}
