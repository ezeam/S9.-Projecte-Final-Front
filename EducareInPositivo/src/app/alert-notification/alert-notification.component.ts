import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-alert-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-notification.component.html',
  styleUrl: './alert-notification.component.scss'
})

export class AlertNotificationComponent {
  @Input() alertMessage: string | null = null;
  @Input() alertStatus: 'success' | 'failed' | null = null;

  @Output() alertClosed = new EventEmitter<void>();


  dismissAlert(): void {
    this.alertClosed.emit();
  }
}
