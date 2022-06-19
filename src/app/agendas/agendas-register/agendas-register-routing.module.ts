import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendasRegisterPage } from './agendas-register.page';

const routes: Routes = [
  {
    path: '',
    component: AgendasRegisterPage
  },
  {
    path: ':id',
    component: AgendasRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendasRegisterPageRoutingModule {}
