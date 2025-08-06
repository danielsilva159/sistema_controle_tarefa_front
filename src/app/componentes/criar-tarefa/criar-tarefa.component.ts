import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-tarefa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar-tarefa.component.html',
  styleUrl: './criar-tarefa.component.scss'
})
export class CriarTarefaComponent {
  @Output() fechar = new EventEmitter<void>();
  @Output() salvar = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', Validators.required],
      responsavel: ['', Validators.required],
      vencimento: ['', Validators.required],
      status: ['A Fazer', Validators.required],
    });
  }

  onCancel() {
    this.fechar.emit();
  }

  onSubmit() {
    if (this.form.valid) {
      this.salvar.emit(this.form.value);
      this.form.reset();
    }
  }
}
