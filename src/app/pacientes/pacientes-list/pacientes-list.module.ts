import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PacientesListPageRoutingModule } from './pacientes-list-routing.module';
import { PacientesListPage } from './pacientes-list.page';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  imports: [
    CommonModule, FormsModule, IonicModule, PacientesListPageRoutingModule, NgxMaskModule.forRoot(), ],
  declarations: [PacientesListPage]
})
export class PacientesListPageModule {}
