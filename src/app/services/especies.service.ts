import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especies } from '../model/especies';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {
  private apiUrl = 'http://localhost:8080/api/V1/especies'

  constructor( private http: HttpClient) { }


  obtenerEspecies(): Observable<Especies[]> {
    return this.http.get<Especies[]>(this.apiUrl);
  }

  obtenerEspeciesPorId(id: number): Observable<Especies> {
    return this.http.get<Especies>(this.apiUrl + `/${id}`);
  }

  agregarEspecies(especies:any): Observable<any> {
    return this.http.post(this.apiUrl,especies);
  }

  actualizarEspecies(id: number, especies: Especies): Observable<any>{
    return this.http.put(this.apiUrl + `/${id}`, especies);
  }

  eliminarEspecies(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
