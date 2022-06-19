import { Injectable } from '@angular/core';
import { Agenda } from './agendas.model'; 

@Injectable({
  providedIn: 'root'
})
export class AgendasService {
  private agendas: Agenda[];
  private contador = 3;

  constructor() {
    this.agendas = JSON.parse(localStorage.getItem('agendas')) ?? [];
  }

  public getAgendas() {
    return this.agendas;
  }
  public remove(descricao: string) {
    this.agendas = this.agendas.filter(agenda => agenda.descricao !== descricao);
    localStorage.setItem('agendas', JSON.stringify(this.agendas));
  }

  public save(agenda: Agenda) {
    if (agenda.id) {
      const index = this.agendas.findIndex(a => a.id === agenda.id);
      this.agendas[index] = agenda;
    } else {
      const id = this.contador++;
      this.agendas.push({ ...agenda, id});
    }
    localStorage.setItem('agendas', JSON.stringify(this.agendas));
  }

  public findById (id: number) {
    return this.agendas.find(agenda => agenda.id === id);
  }

}
