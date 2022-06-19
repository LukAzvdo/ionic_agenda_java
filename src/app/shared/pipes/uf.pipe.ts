import { Pipe, PipeTransform } from '@angular/core';
import { UF } from 'src/app/medicos/medicos.model';

@Pipe({
  name: 'uf'
})
export class UfPipe implements PipeTransform {

  transform(value: UF): string {
    switch(value) {
      case UF.SC: return 'Santa Catarina';
      case UF.RS: return 'Rio Grande do Sul';
      case UF.PR: return 'Paraná';
      case UF.SP: return 'São Paulo';
      case UF.RJ: return 'Rio de Janeiro';
    }
  }

}
