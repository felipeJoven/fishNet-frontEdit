import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Lote } from '../model/lote';

@Injectable({
  providedIn: 'root'
})
export class LoteService {
  private apiUrl = 'http://localhost:8080/api/V1/lote'

  constructor( private http: HttpClient) { }

  obtenerLote(): Observable<Lote[]>{
    return this.http.get<Lote[]>(this.apiUrl);
  }

  obtenerLotePorId(id: number): Observable<Lote> {
    return this.http.get<Lote>(this.apiUrl + `/${id}`);
  }

  agregarLote(lote:any): Observable<any>{
    return this.http.post(this.apiUrl, lote);
  }

  actualizarLote(id: number, lote: Lote): Observable<any>{
    return this.http.put(this.apiUrl + `/${id}`, lote);
  }

  eliminarLote(id:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
