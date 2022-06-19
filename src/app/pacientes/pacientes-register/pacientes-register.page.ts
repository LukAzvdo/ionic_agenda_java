import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDidEnter, ViewDidLeave, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { PacientesApiService } from '../pacientes-api.service';
import { PacientesService } from '../pacientes.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pacientes-register',
  templateUrl: './pacientes-register.page.html',
  styleUrls: ['./pacientes-register.page.scss'],
})
export class PacientesRegisterPage implements OnInit,OnDestroy,ViewWillEnter,ViewDidEnter,ViewWillLeave,ViewDidLeave {

  form: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private pacientesService: PacientesService,
    private pacientesApiService: PacientesApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService

  ) { }

  ngOnInit() {
    console.log('PacientesRegisterPage ngOnInit');

    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', Validators.required],
      nascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    if(id) {
      this.findById(id);
      }
    }

    findById(id: number) {
      this.loading = true;
      this.pacientesApiService
        .findById(id)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe(
          (paciente) => {
            if (paciente) {
              this.form.patchValue({
                ...paciente,
              });
            }
          },
          () =>
            this.messageService.error(
              `Erro ao buscar o paciente com código ${id}`,
              () => this.findById(id)
            )
        );
  }

  ionViewWillEnter(): void {
    console.log('PacientesRegisterPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('PacientesRegisterPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('PacientesRegisterPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('PacientesRegisterPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('PacientesRegisterPage ngOnDestroy');
  }

  salvar() {
    const { value } = this.form;
    const { id, nome } = value;

    if (!id) {
      delete value.id;
    }

    value.nascimento = value.nascimento.split('T')[0];

    this.loading = true;

    this.pacientesApiService
      .save(value)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        () => {
          this.messageService.success(`Paciente ${nome} foi salvo com sucesso!`);
          this.router.navigate(['pacientes-list']);
        },
        ({ error }) => {
          const erro = error?.erro ?? '';
          const mensagem = `Erro ao salvar o paciente ${nome} ${erro ? ': '+erro:''}`;
          this.messageService.error(mensagem, () => this.salvar());
        }
      );
  }

}
