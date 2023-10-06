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
}
