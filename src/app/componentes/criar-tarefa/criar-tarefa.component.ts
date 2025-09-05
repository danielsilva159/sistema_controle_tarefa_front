import { firstValueFrom } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TarefaService } from '../../services/tarefa/tarefa.service';
import { ITarefa } from '../../interfaces/tarefa.interface';
import { DatePipe } from '@angular/common';
import { ConfirmacaoAlertComponent } from '../confirmacao-alert/confirmacao-alert.component';

@Component({
  selector: 'app-criar-tarefa',
  standalone: true,
  imports: [ReactiveFormsModule, ConfirmacaoAlertComponent],
  providers: [DatePipe],
  templateUrl: './criar-tarefa.component.html',
  styleUrl: './criar-tarefa.component.scss',
})
export class CriarTarefaComponent implements OnChanges {
  @Output() fechar = new EventEmitter<void>();
  @Output() salvar = new EventEmitter<any>();
  @Input() tarefa: ITarefa | null = null;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tarefaService: TarefaService,
    private datePipe: DatePipe
  ) {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', Validators.required],
      responsavel: ['', Validators.required],
      vencimento: [new Date(), Validators.required],
      status: ['A Fazer', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tarefa'] && this.tarefa) {
      console.log(this.tarefa.vencimento);

      this.form.patchValue({
        titulo: this.tarefa.titulo,
        descricao: this.tarefa.descricao,
        responsavel: this.tarefa.responsavel,
        vencimento: this.datePipe.transform(
          this.tarefa.vencimento,
          'yyyy-MM-dd'
        ),
        status: this.tarefa.status,
      });
    }
  }

  onCancel() {
    console.log('onCancel');

    this.fechar.emit();
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.tarefa && this.tarefa.id) {
        const tarefa: ITarefa = {
          id: this.tarefa.id,
          ...this.form.value,
        };
        const coluna = this.transformandoStatusemColuna(this.form.value.status);
        firstValueFrom(this.tarefaService.atualizar(tarefa, coluna));
      } else {
        firstValueFrom(this.tarefaService.salvar(this.form.value));
      }
      this.salvar.emit(this.form.value);
      this.fechar.emit();
      this.form.reset();
    }
  }

  transformandoStatusemColuna(status: string): number {
    switch (status) {
      case 'A Fazer':
        return 1;
      case 'Em Progresso':
        return 2;
      case 'Concluída':
        return 3;
      default:
        return 1;
    }
  }
}
