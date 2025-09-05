import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ITarefa } from '../../interfaces/tarefa.interface';
import { CommonModule, NgClass } from '@angular/common';
import { TarefaService } from '../../services/tarefa/tarefa.service';
import { ConfirmacaoAlertComponent } from '../confirmacao-alert/confirmacao-alert.component';

@Component({
  selector: 'app-card-tarefa',
  standalone: true,
  imports: [NgClass, CommonModule, ConfirmacaoAlertComponent],
  templateUrl: './card-tarefa.component.html',
  styleUrl: './card-tarefa.component.scss',
})
export class CardTarefaComponent {
  @Input() tarefa: ITarefa | undefined;
  @Output() abrir = new EventEmitter<ITarefa>();
  @Output() deletar = new EventEmitter<void>();
  showConfirm = false;
  id: number | undefined;

  constructor(private tarefaService: TarefaService) {}

  abrirTarefa() {
    if (this.tarefa) {
      this.abrir.emit(this.tarefa);
    }
  }

  deletarTarefa(id: number | undefined) {
    if (id) {
      this.showConfirm = true;
      this.id = id;
    }
  }

  confirmarAcao() {
    if (this.id) {
      this.tarefaService.deletar(this.id).subscribe({
        next: () => {
          this.deletar.emit();
        },
        error: (err) => {
          console.error('Erro ao deletar tarefa', err);
        },
      });
    }
  }

  cancelarAcao() {
    console.log('❌ Ação cancelada!');
  }
}
