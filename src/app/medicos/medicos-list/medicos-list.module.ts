import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicosListPageRoutingModule } from './medicos-list-routing.module';
import { MedicosListPage } from './medicos-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  imports: [
    CommonModule, FormsModule, IonicModule, MedicosListPageRoutingModule, SharedModule, NgxMaskModule.forRoot(), ],
  declarations: [MedicosListPage]
})
export class MedicosListPageModule {}
