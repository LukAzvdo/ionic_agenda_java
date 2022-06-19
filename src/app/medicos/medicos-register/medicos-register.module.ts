import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicosRegisterPageRoutingModule } from './medicos-register-routing.module';
import { MedicosRegisterPage } from './medicos-register.page';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, IonicModule, MedicosRegisterPageRoutingModule, NgxMaskModule.forRoot(), ],
  declarations: [MedicosRegisterPage]
})
export class MedicosRegisterPageModule {}
