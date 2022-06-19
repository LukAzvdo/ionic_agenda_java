import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialidadePipe } from './pipes/especialidade.pipe';
import { UfPipe } from './pipes/uf.pipe';



@NgModule({
  declarations: [ EspecialidadePipe, UfPipe ],
  imports: [ CommonModule ],
  exports: [ UfPipe, EspecialidadePipe ],
})
export class SharedModule { }
