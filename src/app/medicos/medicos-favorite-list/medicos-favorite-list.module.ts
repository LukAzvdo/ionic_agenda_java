import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicosFavoriteListPageRoutingModule } from './medicos-favorite-list-routing.module';
import { MedicosFavoriteListPage } from './medicos-favorite-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  imports: [
    CommonModule, FormsModule, IonicModule, MedicosFavoriteListPageRoutingModule, SharedModule, NgxMaskModule.forRoot(), ],
  declarations: [MedicosFavoriteListPage]
})
export class MedicosFavoriteListPageModule {}
