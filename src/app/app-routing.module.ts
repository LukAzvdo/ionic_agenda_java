import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pacientes-list',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'agendas-list',
    loadChildren: () => import('./agendas/agendas-list/agendas-list.module').then( m => m.AgendasListPageModule)
  },
  {
    path: 'agendas-register',
    loadChildren: () => import('./agendas/agendas-register/agendas-register.module').then( m => m.AgendasRegisterPageModule)
  },
  {
    path: 'pacientes-list',
    loadChildren: () => import('./pacientes/pacientes-list/pacientes-list.module').then( m => m.PacientesListPageModule)
  },
  {
    path: 'pacientes-register',
    loadChildren: () => import('./pacientes/pacientes-register/pacientes-register.module').then( m => m.PacientesRegisterPageModule)
  },
  {
    path: 'medicos-list',
    loadChildren: () => import('./medicos/medicos-list/medicos-list.module').then( m => m.MedicosListPageModule)
  },
  {
    path: 'medicos-register',
    loadChildren: () => import('./medicos/medicos-register/medicos-register.module').then( m => m.MedicosRegisterPageModule)
  },
  {
    path: 'medicos-favorite-list',
    loadChildren: () => import('./medicos/medicos-favorite-list/medicos-favorite-list.module').then( m => m.MedicosFavoriteListPageModule)
  },
  {
    path: 'procedimentos',
    loadChildren: () => import('./procedimentos/procedimentos.module').then( m => m.ProcedimentosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
