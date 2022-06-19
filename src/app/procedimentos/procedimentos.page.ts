import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ProcedimentosService } from './procedimentos.service';
import { Procedimento } from './procedimentos.model';
import { TouchSequence } from 'selenium-webdriver';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-procedimentos',
  templateUrl: './procedimentos.page.html',
  styleUrls: ['./procedimentos.page.scss'],
})
export class ProcedimentosPage implements OnInit {
  procedimentos: Procedimento[];
  loading = false;

  constructor(
    private alertController: AlertController,
    private procedimentosService: ProcedimentosService
  ) { }

  ngOnInit() {
    this.loadProcedimentos();
  }

  loadProcedimentos() {
    this.loading = true;
    this.procedimentosService.findAll().subscribe((procedimentos) => {
      console.log(procedimentos);
      this.loading = false;
      this.procedimentos = procedimentos;
    });
  }

  async add() {
    const alert = await this.alertController.create({
      header: 'Cadastro de Procedimentos',
      inputs: [
        {
          name: 'codigo',
          placeholder: 'Código',
        },
        {
          name: 'descricao',
          placeholder: 'Descrição',
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Salvar',
          handler: (value) => {
            this.loading = true;
            this.procedimentosService.save(value).subscribe(() => this.loadProcedimentos());
          }
        }
      ]
    });
    alert.present();
  }

/*
   remove(procedimento: Procedimento){
    this.procedimentosService.remove(procedimento.id).subscribe(procedimento => {
      console.log(procedimento)
    });
  }
*/

  async remove(procedimento: Procedimento) {
    const alert = await this.alertController.create({
      header: 'Deletar Procedimento ?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Deletar',
          handler: (id) => {
            this.loading = true;
            this.procedimentosService.remove(id).subscribe(() => this.loadProcedimentos());
          }
        }
      ]
    });
    alert.present();
  }

}