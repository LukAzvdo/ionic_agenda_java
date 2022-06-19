import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Procedimento } from './procedimentos.model';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentosService {

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Procedimento[]> {
    return this.httpClient.get<Procedimento[]>(`${environment.apiUrl}/procedimentos`);
  }

  save(procedimento: Procedimento) {
    return this.httpClient.post(`${environment.apiUrl}/procedimentos`, procedimento);
  }

  remove(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}/procedimentos/${id}` // 7` // ${id}` // , procedimento
    );
  }

/*
  getProcedimentos(): Observable<Procedimento[]> {
    return this.httpClient.get<Procedimento[]>(`${environment.apiUrl}/procedimentos`);
}

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/procedimentos/${id}`);
}

  findById(id: number): Observable<Procedimento> {
    return this.httpClient.get<Procedimento>(`${environment.apiUrl}/procedimentos/${id}`);
}


  save(procedimento: Procedimento): Observable<Procedimento> {
    if(procedimento.id) {
      return this.httpClient.put<Procedimento>(`${environment.apiUrl}/procedimentos/${procedimento.id}`, procedimento);
    }
    return this.httpClient.post<Procedimento>(`${environment.apiUrl}/procedimentos`, procedimento);
  }
*/

}