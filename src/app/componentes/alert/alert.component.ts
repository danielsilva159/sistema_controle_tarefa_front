import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Alert } from '../../interfaces/alert.interface';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  alert?: Alert;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alert$.subscribe((alert) => {
      this.alert = alert;

      setTimeout(() => {
        this.alert = undefined;
      }, 4000);
    });
  }
}
