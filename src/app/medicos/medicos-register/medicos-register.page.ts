import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDidEnter, ViewDidLeave, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { MedicosApiService } from '../medicos-api.service';
import { Especialidade, UF } from '../medicos.model';
import { MedicosService } from '../medicos.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-medicos-register',
  templateUrl: './medicos-register.page.html',
  styleUrls: ['./medicos-register.page.scss'],
})
export class MedicosRegisterPage implements OnInit,OnDestroy,ViewWillEnter,ViewDidEnter,ViewWillLeave,ViewDidLeave {

  form: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private medicosService: MedicosService,
    private medicosApiService: MedicosApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService

  ) { }

  ngOnInit() {
    console.log('MedicosRegisterPage ngOnInit');
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(4)]],
      especialidade: [Especialidade.clinica_medica, Validators.required],
      crm: ['', Validators.required],
      uf: [UF.SC, Validators.required],
      telefone: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.findById(id);
      }
    }

    findById(id: number) {
      this.loading = true;
      this.medicosApiService
        .findById(id)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe(
          (medico) => {
            if (medico) {
              this.form.patchValue({
                ...medico,
              });
            }
          },
          () =>
            this.messageService.error(
              `Erro ao buscar o medico com código ${id}`,
              () => this.findById(id)
            )
        );
    }

  ionViewWillEnter(): void {
    console.log('MedicosRegisterPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('MedicosRegisterPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('MedicosRegisterPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('MedicosRegisterPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('MedicosRegisterPage ngOnDestroy');
  }

  salvar() {
    const { value } = this.form;
    const { id, nome } = value;

    if (!id) {
      delete value.id;
    }

    this.loading = true;

    this.medicosApiService
      .save(value)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        () => {
          this.messageService.success(`Médico ${nome} foi salvo com sucesso!`);
          this.router.navigate(['medicos-list']);
        },
        ({ error }) => {
          const erro = error?.erro ?? '';
          const mensagem = `Erro ao salvar o médico ${nome} ${erro ? ': '+erro:''}`;
          this.messageService.error(mensagem, () => this.salvar());
        }
      );
  }

}
