import { Injectable } from '@angular/core';
import { Medico, Especialidade, UF } from './medicos.model'; 

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private medicos: Medico[];
  private contador = 3;

  constructor() {
    this.medicos = JSON.parse(localStorage.getItem('medicos')) ?? [];
  }

  public getMedicos() {
    return this.medicos;
  }
  public remove(nome: string) {
    this.medicos = this.medicos.filter(medico => medico.nome !== nome);
    localStorage.setItem('medicos', JSON.stringify(this.medicos));
  }

  public save(medico: Medico) {
    if (medico.id) {
      const index = this.medicos.findIndex(m => m.id === medico.id);
      this.medicos[index] = medico;
    } else {
      const id = this.contador++;
      this.medicos.push({ ...medico, id});
    }
    localStorage.setItem('medicos', JSON.stringify(this.medicos));
  }

  public findById (id: number) {
    return this.medicos.find(medico => medico.id === id);
  }  

}
