import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medico } from './medicos.model';

@Injectable({
  providedIn: 'root'
})
export class MedicosApiService {

  constructor(
    private httpClient: HttpClient) { }

  getMedicos(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(`${environment.apiUrl}/medicos`);
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/medicos/${id}`);
  }

  findById(id: number): Observable<Medico> {
    return this.httpClient.get<Medico>(`${environment.apiUrl}/medicos/${id}`);
  }

  save(medico: Medico): Observable<Medico> {
    if(medico.id) {
      return this.httpClient.put<Medico>(`${environment.apiUrl}/medicos/${medico.id}`, medico);
    }
    return this.httpClient.post<Medico>(`${environment.apiUrl}/medicos`, medico);
  }

}
