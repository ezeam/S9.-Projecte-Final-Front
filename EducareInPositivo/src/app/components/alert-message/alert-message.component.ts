import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alert-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-message.component.html',
  styleUrl: './alert-message.component.scss',
})

export class AlertMessageComponent implements OnInit {

  // Utilizamos un Subject para emitir el mensaje
  alertMessageSubject = new Subject<string>();
  alertMessage$ = this.alertMessageSubject.asObservable();  // Observable que podemos suscribir a él

  constructor() { }

  ngOnInit(): void {
    // Emitimos un mensaje de alerta al iniciar el componente
    this.alertMessageSubject.next('¡Este es un mensaje de alerta!');


    // this.alertMessage = ('¡Este es un mensaje de alerta!');
    console.log('GHOLA?¿')
  }

  // Método para cerrar la alerta
  closeAlert() {
    this.alertMessageSubject.next('');  // Emitimos un mensaje vacío para ocultar la alerta
  }
}