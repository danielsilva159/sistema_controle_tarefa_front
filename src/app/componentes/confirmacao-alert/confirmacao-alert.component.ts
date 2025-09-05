import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmacao-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmacao-alert.component.html',
  styleUrl: './confirmacao-alert.component.scss',
})
export class ConfirmacaoAlertComponent {
  @Input() message = 'Tem certeza que deseja continuar?';
  @Input() show = false;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
    this.show = false;
  }

  onCancel() {
    this.cancel.emit();
    this.show = false;
  }
}
