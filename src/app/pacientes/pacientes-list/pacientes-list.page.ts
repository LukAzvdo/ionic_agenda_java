import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, ViewDidEnter, ViewDidLeave, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { PacientesApiService } from '../pacientes-api.service';
import { Paciente } from '../pacientes.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.page.html',
  styleUrls: ['./pacientes-list.page.scss'],
})
export class PacientesListPage implements OnInit,OnDestroy,ViewWillEnter,ViewDidEnter,ViewWillLeave,ViewDidLeave {

  pacientes: Paciente[];
  loading = false;

  constructor(
    private alertController: AlertController,
    private pacientesApiService: PacientesApiService,
    private messageService: MessageService
  ) {
    this.pacientes = [];
  }

  ngOnInit() {
    console.log('PacientesListPage ngOnInit');
  }

  ionViewWillEnter(): void {
    this.listPacientes();
    console.log('PacientesListPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('PacientesListPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('PacientesListPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('PacientesListPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('PacientesListPage ngOnDestroy');
  }

  listPacientes() {
    this.loading = true;
    this.pacientesApiService
      .getPacientes()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (pacientes) => (this.pacientes = pacientes),
        () =>
          this.messageService.error('Erro ao buscar a lista de pacientes', () =>
            this.listPacientes()
          )
      );
  }

  confirmRemove(paciente: Paciente) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o paciente ${paciente.nome}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => this.remove(paciente),
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }

  remove(paciente: Paciente) {
    this.loading = true;
    this.pacientesApiService
      .remove(paciente.id)
      .subscribe(
        () => {
          this.messageService.success(`Excluído paciente ${paciente.nome} com sucesso!`);
          this.listPacientes();
        },
        () => {
          this.messageService.error('Erro ao excluir o paciente', () =>
            this.remove(paciente)
            );
            this.loading = false;
          }
      );
  }
}
