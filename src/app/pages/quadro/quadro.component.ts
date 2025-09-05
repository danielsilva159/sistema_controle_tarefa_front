import { Component, OnInit } from '@angular/core';
import { DetalharTarefaComponent } from '../../componentes/detalhar-tarefa/detalhar-tarefa.component';
import { ITarefa } from '../../interfaces/tarefa.interface';
import { CommonModule } from '@angular/common';
import { CriarTarefaComponent } from '../../componentes/criar-tarefa/criar-tarefa.component';
import { TarefaService } from '../../services/tarefa/tarefa.service';
import { CardTarefaComponent } from '../../componentes/card-tarefa/card-tarefa.component';
import {
  CdkDropList,
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-quadro',
  standalone: true,
  imports: [
    DetalharTarefaComponent,
    CommonModule,
    CriarTarefaComponent,
    CardTarefaComponent,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './quadro.component.html',
  styleUrl: './quadro.component.scss',
})
export class QuadroComponent implements OnInit {
  selectedTarefa: ITarefa | null = null;
  novaTarefa = false;
  edicao = false;
  fazer: ITarefa[] = [];
  progresso: ITarefa[] = [];
  concluida: ITarefa[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.listarTarefas();
  }

  abrirTarefa(tarefa: ITarefa) {
    this.selectedTarefa = tarefa;
    console.log(tarefa);
  }
  editarTarefa(event: ITarefa) {
    this.selectedTarefa = event;
    this.edicao = true;
  }

  fecharModal() {
    this.novaTarefa = false;
    this.edicao = false;
    this.selectedTarefa = null;
  }

  dialogNovaTarefa() {
    this.novaTarefa = true;
  }

  SalvarTarefa() {
    this.fecharModal();
    this.listarTarefas();
  }

  listarTarefas() {
    console.log('entrou no listar');

    this.tarefaService.listar().subscribe((tarefas) => {
      this.fazer = tarefas.fazer;
      this.progresso = tarefas.progresso;
      this.concluida = tarefas.concluido;
    });
  }

  mover(event: CdkDragDrop<ITarefa[]>, coluna: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const tarefa = firstValueFrom(
        this.tarefaService.atualizar(
          event.container.data[event.currentIndex],
          coluna
        )
      );
      tarefa.then(() => {
        this.listarTarefas();
      });
    }
  }
}
