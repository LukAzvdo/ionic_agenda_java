import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menus = [
    { title: 'Calendário', url: '/calendar', icon: 'calendar' },
    { title: 'Agendas', url: '/agendas-list', icon: 'document' },
    { title: 'Pacientes', url: '/pacientes-list', icon: 'body' },
    { title: 'Médicos Favoritos', url: '/medicos-favorite-list', icon: 'star' },
    { title: 'Médico', url: '/medicos-list', icon: 'medkit' },
    { title: 'Procedimentos', url: '/procedimentos', icon: 'medical'},
  ];

  constructor() {}
}
