import { Pipe, PipeTransform } from '@angular/core';
import { Especialidade } from 'src/app/medicos/medicos.model';

@Pipe({
  name: 'especialidade'
})
export class EspecialidadePipe implements PipeTransform {

  transform(value: Especialidade): string {
    switch(value) {
      case Especialidade.clinica_medica: return 'Clinica Medica';
      case Especialidade.ortopedia: return 'Ortopedia';
      case Especialidade.ginecologia: return 'Ginecologia';
      case Especialidade.pediatria: return 'Pediatria';
      case Especialidade.outros: return 'Outros';
    }
  }

}
