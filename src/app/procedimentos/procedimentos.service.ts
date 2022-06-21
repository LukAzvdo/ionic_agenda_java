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
    return this.httpClient.delete<Procedimento[]>(`${environment.apiUrl}/procedimentos/${id}`);
  }

}