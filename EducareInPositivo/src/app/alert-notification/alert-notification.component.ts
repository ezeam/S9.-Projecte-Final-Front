import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-alert-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-notification.component.html',
  styleUrl: './alert-notification.component.scss'
})

export class AlertNotificationComponent implements OnChanges {
  @Input() alertMessage: string | null = null;
  @Input() alertStatus: 'success' | 'failed' | null = null;

  @Output() alertClosed = new EventEmitter<void>();

  private autoCloseTimeout:ReturnType<typeof setTimeout> | undefined;

  // Detecta cambios en las entradas del componente
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['alertMessage'] && this.alertMessage) {
      this.startAutoCloseTimer();
    }
  }

  // Inicia el temporizador de cierre automático
  private startAutoCloseTimer(): void {
    clearTimeout(this.autoCloseTimeout); // Limpia cualquier temporizador previo
    this.autoCloseTimeout = setTimeout(() => {
      this.dismissAlert();
    }, 12000); // 12 segundos
  }

  // Método para cerrar manualmente la alerta
  dismissAlert(): void {
    this.alertClosed.emit();
  }
}
