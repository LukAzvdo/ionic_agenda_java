import { Injectable } from '@angular/core';
import { Paciente } from './pacientes.model'; 

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private pacientes: Paciente[];
   private contador = 0;

  constructor() {
    this.pacientes = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  }
  public getPacientes() {
    return this.pacientes;
  }
  public remove(nome: string) {
    this.pacientes = this.pacientes.filter(paciente => paciente.nome !== nome);
    localStorage.setItem('pacientes', JSON.stringify(this.pacientes));
  }

  public save(paciente: Paciente) {
    if (paciente.id) {
      const index = this.pacientes.findIndex(p => p.id === paciente.id);
      this.pacientes[index] = paciente;
    } else {
      const id = this.contador++;
      this.pacientes.push({ ...paciente, id});
    }
    localStorage.setItem('pacientes', JSON.stringify(this.pacientes));
  }

  public findById (id: number) {
    return this.pacientes.find(paciente => paciente.id === id);
  }

}
