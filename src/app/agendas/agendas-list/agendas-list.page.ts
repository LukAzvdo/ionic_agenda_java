import { Component, OnDestroy, OnInit } from '@angular/core';
import {AlertController, ToastController, ViewDidEnter, ViewDidLeave, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { AgendasApiService } from '../agendas-api.service';
import { Agenda } from '../agendas.model';
import { AgendasService } from '../agendas.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-agendas-list',
  templateUrl: './agendas-list.page.html',
  styleUrls: ['./agendas-list.page.scss'],
})
export class AgendasListPage implements OnInit,OnDestroy,ViewWillEnter,ViewDidEnter,ViewWillLeave,ViewDidLeave {

  agendas: Agenda[];
  loading = false;

  constructor(
    private alertController: AlertController,
    private agendasService: AgendasService,
    private agendasApiService: AgendasApiService,
    private toastController: ToastController,
    private messageService: MessageService
  ) {

    this.agendas = [];
  }

  ngOnInit() {
    console.log('AgendasListPage ngOnInit');
  }
    ionViewWillEnter(): void {
      this.listAgendas();
      console.log('AgendasListPage ionViewWillEnter');
    }
  
    ionViewDidEnter(): void {
      console.log('AgendasListPage ionViewDidEnter');
    }
  
    ionViewWillLeave(): void {
      console.log('AgendasListPage ionViewWillLeave');
    }
  
    ionViewDidLeave(): void {
      console.log('AgendasListPage ionViewDidLeave');
    }
  
    ngOnDestroy(): void {
      console.log('AgendasListPage ngOnDestroy');
  }

  listAgendas() {
    this.loading = true;
    this.agendasApiService
      .getAgendas()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (agendas) => (this.agendas = agendas),
        () =>
          this.messageService.error('Erro ao buscar a lista de agendas', () =>
            this.listAgendas()
          )
      );
  }

  confirmRemove(agenda: Agenda) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir a agenda ${agenda.descricao}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => this.remove(agenda),
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }

  remove(agenda: Agenda) {
    this.loading = true;
    this.agendasApiService
      .remove(agenda.id)
      .subscribe(
        () => {
          this.messageService.success(`Excluído agenda ${agenda.descricao} com sucesso!`);
          this.listAgendas();
        },
        () => {
          this.messageService.error('Erro ao excluir a agenda', () =>
            this.remove(agenda)
          );
          this.loading = false;
        }
      );
  }
}
