import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITarefa } from '../../interfaces/tarefa.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  constructor(private http: HttpClient) {}

  salvar(tarefa: ITarefa) {
    return this.http.post(`${environment.apiUrl}/tarefas`, tarefa);
  }
  listar(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/tarefas`);
  }
  atualizar(tarefa: ITarefa, coluna: number) {
    return this.http.put(`${environment.apiUrl}/tarefas/${tarefa.id}`, {
      tarefa,
      coluna,
    });
  }
  deletar(id: number) {
    return this.http.delete(`${environment.apiUrl}/tarefas/${id}`);
  }
}
