import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDidEnter, ViewDidLeave, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { AgendasApiService } from '../agendas-api.service';
import { AgendasService } from '../agendas.service';
import { finalize } from 'rxjs/operators';
import { Procedimento } from 'src/app/procedimentos/procedimentos.model';
import { ProcedimentosService } from 'src/app/procedimentos/procedimentos.service';

@Component({
  selector: 'app-agendas-register',
  templateUrl: './agendas-register.page.html',
  styleUrls: ['./agendas-register.page.scss'],
})
export class AgendasRegisterPage implements OnInit,OnDestroy,ViewWillEnter,ViewDidEnter,ViewWillLeave,ViewDidLeave {

  form: FormGroup;
  loading = false;
  procedimentos: Procedimento[];

  constructor(
    private formBuilder: FormBuilder,
    private agendasService: AgendasService,
    private agendasApiService: AgendasApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private ProcedimentoService: ProcedimentosService

  ) { }

  ngOnInit() {
    console.log('AgendasRegisterPage ngOnInit');

    this.ProcedimentoService.findAll().subscribe((procedimentos) => this.procedimentos = procedimentos);

    this.form = this.formBuilder.group({
      id: [''],
      descricao: ['', [Validators.required, Validators.minLength(5)]],
      medico: ['', Validators.required],
      procedimentos: [[]],
      data: ['', Validators.required],
      hora: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.findById(id);
      }
    }
    findById(id: number) {
      this.loading = true;
      this.agendasApiService
        .findById(id)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe(
          (agenda) => {
            if (agenda) {
              this.form.patchValue({
                ...agenda,
              });
            }
          },
          () =>
            this.messageService.error(
              `Erro ao buscar a agenda com código ${id}`,
              () => this.findById(id)
            )
        );
  }

  ionViewWillEnter(): void {
    console.log('AgendasRegisterPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('AgendasRegisterPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('AgendasRegisterPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('AgendasRegisterPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('AgendasRegisterPage ngOnDestroy');
  }

  compareWith(o1: Procedimento, o2: Procedimento | Procedimento[]) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((u: Procedimento) => u.id === o1.id);
    }

    return o1.id === o2.id;
  }



  salvar() {
    const { descricao } = this.form.value;
    this.loading = true;
    this.agendasApiService
      .save(this.form.value)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        () => {
          this.messageService.success(`Agenda ${descricao} foi salva com sucesso!`);
          this.router.navigate(['agendas-list']);
        },
        () => {
          this.messageService.error(`Erro ao salvar a agenda ${descricao}`, () =>
            this.salvar()
          );
        }
      );
  }

}
