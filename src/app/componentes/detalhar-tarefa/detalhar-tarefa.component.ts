import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITarefa } from '../../interfaces/tarefa.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhar-tarefa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhar-tarefa.component.html',
  styleUrl: './detalhar-tarefa.component.scss',
})
export class DetalharTarefaComponent {
  @Input() tarefa!: ITarefa | null;
  @Output() fechar = new EventEmitter<ITarefa>();
  @Output() editarTarefa = new EventEmitter<ITarefa>();
  onClose() {
    this.fechar.emit();
  }
  editar(tarefa: ITarefa) {
    this.editarTarefa.emit(tarefa);
  }
}
