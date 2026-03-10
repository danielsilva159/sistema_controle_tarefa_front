import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../../interfaces/alert.interface';
import { TypeMessageAlert } from '../../enuns/type-message-alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new Subject<Alert>();

  alert$ = this.alertSubject.asObservable();

  alert(type: TypeMessageAlert, message: string) {
    this.alertSubject.next({ type, message });
  }
}
