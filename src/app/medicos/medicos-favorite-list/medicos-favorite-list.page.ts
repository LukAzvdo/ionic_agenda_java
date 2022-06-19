import { Component, OnInit } from '@angular/core';
import { MedicosFavoriteListService } from '../medicos-favorite-list.service';
import { Medico } from '../medicos.model';

@Component({
  selector: 'app-medicos-favorite-list',
  templateUrl: './medicos-favorite-list.page.html',
  styleUrls: ['./medicos-favorite-list.page.scss'],
})
export class MedicosFavoriteListPage implements OnInit {

  loading = false;
  medicos: Medico[];

  constructor(private medicosFavoriteList: MedicosFavoriteListService) {}

  ngOnInit() {
    this.loadFavoriteList();
  }

  loadFavoriteList() {
    this.loading = true;
    this.medicosFavoriteList.getFavoriteList().subscribe((medicos) => {
      this.medicos = medicos;
      this.loading = false;
    });
  }

  remove(medico: Medico) {
    this.medicosFavoriteList.remove(medico);
    this.loadFavoriteList();
  }

}
