import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PacientesRegisterPageRoutingModule } from './pacientes-register-routing.module';
import { PacientesRegisterPage } from './pacientes-register.page';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, IonicModule, PacientesRegisterPageRoutingModule, NgxMaskModule.forRoot(), ],
  declarations: [PacientesRegisterPage]
})
export class PacientesRegisterPageModule {}
