import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendasRegisterPageRoutingModule } from './agendas-register-routing.module';

import { AgendasRegisterPage } from './agendas-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgendasRegisterPageRoutingModule
  ],
  declarations: [AgendasRegisterPage]
})
export class AgendasRegisterPageModule {}
