import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcedimentosPage } from './procedimentos.page';

const routes: Routes = [
  {
    path: '',
    component: ProcedimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcedimentosPageRoutingModule {}
