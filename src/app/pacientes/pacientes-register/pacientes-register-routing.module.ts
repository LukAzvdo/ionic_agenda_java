import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesRegisterPage } from './pacientes-register.page';

const routes: Routes = [
  {
    path: '',
    component: PacientesRegisterPage
  },
  {
    path: ':id',
    component: PacientesRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesRegisterPageRoutingModule {}
