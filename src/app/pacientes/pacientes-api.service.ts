import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from './pacientes.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesApiService {

  constructor(
    private httpClient: HttpClient) { }

  getPacientes(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(`${environment.apiUrl}/pacientes`);
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/pacientes/${id}`);
  }

  findById(id: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(`${environment.apiUrl}/pacientes/${id}`);
  }

  save(paciente: Paciente): Observable<Paciente> {
    if(paciente.id) {
      return this.httpClient.put<Paciente>(`${environment.apiUrl}/pacientes/${paciente.id}`, paciente);
    }
    return this.httpClient.post<Paciente>(`${environment.apiUrl}/pacientes`, paciente);
  }
}
