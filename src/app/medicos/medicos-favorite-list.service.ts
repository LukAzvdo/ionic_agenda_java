import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';
import { MedicosApiService } from './medicos-api.service';
import { Medico } from './medicos.model';

@Injectable({
  providedIn: 'root'
})
export class MedicosFavoriteListService {

  medicosIds: number[];

  constructor(
    private medicosApiService: MedicosApiService,
    private messageMessage: MessageService
  ) {
    this.medicosIds = JSON.parse(localStorage.getItem('FavoriteList')) ?? [];
  }

  getFavoriteList(): Observable<Medico[]> {
    const requests = this.medicosIds.map((medicoId) =>
      this.medicosApiService.findById(medicoId)
    );
    return requests.length ? forkJoin(requests) : of([]) ;
  }

  add({ id, nome }: Medico) {
    if (this.medicosIds.some((medicoId) => medicoId === id)) {
      this.messageMessage.error(`Médico ${nome} já está na sua lista de favoritos`);
      return;
    }

    this.medicosIds = [...this.medicosIds, id];
    localStorage.setItem('FavoriteList', JSON.stringify(this.medicosIds));
    this.messageMessage.success(`Médico ${nome} adicionado à lista de favoritos!`);
  }

  remove({ id, nome }: Medico) {
    this.medicosIds = this.medicosIds.filter((medicoId) => medicoId !== id);
    localStorage.setItem('FavoriteList', JSON.stringify(this.medicosIds));
    this.messageMessage.success(`Médico ${nome} removido da lista de favoritos!`);
  }

}