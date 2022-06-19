import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProcedimentosPageRoutingModule } from './procedimentos-routing.module';
import { ProcedimentosPage } from './procedimentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcedimentosPageRoutingModule
  ],
  declarations: [ProcedimentosPage]
})
export class ProcedimentosPageModule {}
