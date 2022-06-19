import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendasListPageRoutingModule } from './agendas-list-routing.module';

import { AgendasListPage } from './agendas-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendasListPageRoutingModule
  ],
  declarations: [AgendasListPage]
})
export class AgendasListPageModule {}
