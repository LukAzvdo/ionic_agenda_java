import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agenda } from './agendas.model';

@Injectable({
  providedIn: 'root'
})
export class AgendasApiService {

  constructor(
    private httpClient: HttpClient) { }

  getAgendas(): Observable<Agenda[]> {
    return this.httpClient.get<Agenda[]>(`${environment.apiUrl}/agendas`);
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/agendas/${id}`);
  }

  findById(id: number): Observable<Agenda> {
    return this.httpClient.get<Agenda>(`${environment.apiUrl}/agendas/${id}`);
  }

  save(agenda: Agenda): Observable<Agenda> {
    if(agenda.id) {
      return this.httpClient.put<Agenda>(`${environment.apiUrl}/agendas/${agenda.id}`, agenda);
    }
    return this.httpClient.post<Agenda>(`${environment.apiUrl}/agendas`, agenda);
  }

}
