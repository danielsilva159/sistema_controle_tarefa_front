import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../interfaces/tarefa.interface';



@Component({
  selector: 'app-detalhar-tarefa',
  standalone: true,
  imports: [],
  templateUrl: './detalhar-tarefa.component.html',
  styleUrl: './detalhar-tarefa.component.scss'
})
export class DetalharTarefaComponent {

  @Input() tarefa!: Tarefa | null;
  @Output() fechar = new EventEmitter<void>();

  onClose() {
    this.fechar.emit();
  }

}
