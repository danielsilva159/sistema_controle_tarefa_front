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
import { AlertService } from '../../services/alert/alert.service';
import { TypeMessageAlert } from '../../enuns/type-message-alert';
import { UsuarioService } from '../../services/usuario/usuario.service';
import IUsuario from '../../interfaces/usuario.interface';
import { TemplateComponent } from '../../componentes/template/template.component';
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
    TemplateComponent,
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
  usuarioLogado: IUsuario | null = null;

  constructor(
    private tarefaService: TarefaService,
    private alertService: AlertService,
    private usuarioService: UsuarioService,
  ) {}

  ngOnInit(): void {
    this.listarTarefas();
    this.usuarioLogado = this.usuarioService.getUsuario();
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
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const tarefa = firstValueFrom(
        this.tarefaService.atualizar(
          event.container.data[event.currentIndex],
          coluna,
        ),
      );
      tarefa.then(() => {
        this.alertService.alert(TypeMessageAlert.Success, this.message(coluna));
        this.listarTarefas();
      });
    }
  }

  message(coluna: number): string {
    switch (coluna) {
      case 1:
        return 'Tarefa movida para Fazer!';
      case 2:
        return 'Tarefa movida para Em Progresso!';
      case 3:
        return 'Tarefa movida para Concluída!';
      default:
        return '';
    }
  }
}
