import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicosFavoriteListPage } from './medicos-favorite-list.page';

const routes: Routes = [
  {
    path: '',
    component: MedicosFavoriteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicosFavoriteListPageRoutingModule {}
