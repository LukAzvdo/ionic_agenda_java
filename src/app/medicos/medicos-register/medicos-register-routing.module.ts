import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicosRegisterPage } from './medicos-register.page';

const routes: Routes = [
  {
    path: '',
    component: MedicosRegisterPage
  },
  {
    path: ':id',
    component: MedicosRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicosRegisterPageRoutingModule {}
