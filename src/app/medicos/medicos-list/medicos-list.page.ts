import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ToastController, ViewDidEnter, ViewDidLeave, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { MedicosApiService } from '../medicos-api.service';
import { Especialidade, Medico, UF } from '../medicos.model';
import { MedicosService } from '../medicos.service';
import { finalize } from 'rxjs/operators';
import { MedicosFavoriteListService } from '../medicos-favorite-list.service';

@Component({
  selector: 'app-medicos-list',
  templateUrl: './medicos-list.page.html',
  styleUrls: ['./medicos-list.page.scss'],
})
export class MedicosListPage implements OnInit,OnDestroy,ViewWillEnter,ViewDidEnter,ViewWillLeave,ViewDidLeave {

  medicos: Medico[];
  loading = false;

  constructor(
    private alertController: AlertController,
    private medicosService: MedicosService,
    private medicosApiService: MedicosApiService,
    private toastController: ToastController,
    private MedicosFavoriteListService: MedicosFavoriteListService,
    private messageService: MessageService
  ) {
    this.medicos = [];
  }

  ngOnInit() {
    console.log('MedicosListPage ngOnInit');
  }

  ionViewWillEnter(): void {
    this.listMedicos();
    console.log('MedicosListPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('MedicosListPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('MedicosListPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('MedicosListPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('MedicosListPage ngOnDestroy');
  }

  listMedicos() {
    this.loading = true;
    this.medicosApiService
    .getMedicos()
    .pipe(
      finalize(() => {
        this.loading = false;
      })
    )
    .subscribe(
      (medicos) => (this.medicos = medicos),
      () =>
        this.messageService.error('Erro ao buscar a lista de medicos', () =>
          this.listMedicos()
        )
    );
  }

  confirmRemove(medico: Medico) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o medico ${medico.nome}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => this.remove(medico),
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }

  remove(medico: Medico) {
    this.loading = true;
    this.medicosApiService
      .remove(medico.id)
      .subscribe(
        () => {
          this.messageService.success(`Excluído medico ${medico.nome} com sucesso!`);
          this.listMedicos();
        },
        () => {
          this.messageService.error('Erro ao excluir o medico', () =>
            this.remove(medico)
          );
          this.loading = false;
        }
      );
  }

  addFavoriteList(medico: Medico) {
    this.MedicosFavoriteListService.add(medico);
  }

  close(sliding: IonItemSliding) {
    sliding.close();
  }

}
