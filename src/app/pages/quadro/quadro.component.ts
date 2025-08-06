import { Component } from '@angular/core';
import { DetalharTarefaComponent } from "../../componentes/detalhar-tarefa/detalhar-tarefa.component";
import { Tarefa } from '../../interfaces/tarefa.interface';
import { CommonModule } from '@angular/common';
import { CriarTarefaComponent } from "../../componentes/criar-tarefa/criar-tarefa.component";

@Component({
  selector: 'app-quadro',
  standalone: true,
  imports: [DetalharTarefaComponent, CommonModule, CriarTarefaComponent],
  templateUrl: './quadro.component.html',
  styleUrl: './quadro.component.scss'
})
export class QuadroComponent {
  selectedTarefa: Tarefa | null = null;

  abrirTarefa(){
    const tarefa: Tarefa = {
      titulo: 'string;',
  descricao: 'string;',
  status: 'string;',
  responsavel: 'string;',
  vencimento: 'string;',
  anexos: []
    }
    this.selectedTarefa = tarefa;
  }

  fecharModal(){
    this.selectedTarefa = null;
  }
}
