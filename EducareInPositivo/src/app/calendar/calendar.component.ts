import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, EventClickArg, EventDropArg, EventInput } from '@fullcalendar/core';
import { Subscription } from 'rxjs';
import { CalendarService } from '../services/calendar.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import DayGridPlugin from "@fullcalendar/daygrid"
import TimeGridPlugin from "@fullcalendar/timegrid"
import InteractionPlugin, { DateClickArg } from "@fullcalendar/interaction"
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit, OnDestroy {
 @ViewChild(FullCalendarComponent) calendarComponent!: FullCalendarComponent;

  // Configuración de FullCalendar
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [DayGridPlugin, InteractionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    },
    events: [], // Se carga a través del método loadEvents
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  selectedDate: string | null = null;
  eventName: string = '';
  availableDates: string[] = []; // Para almacenar las fechas disponibles

  private subscription: Subscription = new Subscription();

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    // Obtener las fechas disponibles del backend al iniciar el componente
    this.subscription.add(
      this.calendarService.getAvailableDates().subscribe((dates: string[]) => {
        this.availableDates = dates; // Guardamos las fechas disponibles
        this.loadEvents();  // Cargar los eventos (fechas) en el calendario
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();  // Limpiar la suscripción al destruir el componente
  }

  // Cargar los eventos (fechas disponibles) en el calendario
  loadEvents(): void {
    const events: EventInput[] = this.availableDates.map(date => ({
      title: 'Disponible',
      date: date
    }));

    // Agregar los eventos al calendario
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.removeAllEvents();  // Limpiar eventos actuales
    calendarApi.addEventSource(events);  // Añadir los nuevos eventos (fechas)
  }

  // Función cuando se hace clic en una fecha
  handleDateClick(arg: { dateStr: string }) {
    this.selectedDate = arg.dateStr;  // Almacenar la fecha seleccionada
  }

  // Función cuando se hace clic en un evento (en este caso, una fecha)
  handleEventClick(arg: { event: { title: string } }) {
    alert('Evento: ' + arg.event.title);  // Mostrar el título del evento
  }

  // Guardar un nuevo evento (cita) usando la API
  saveEvent() {
    if (this.selectedDate && this.eventName) {
      const newAppointment = {
        date: this.selectedDate,
        name: this.eventName
      };

      // Guardar la cita a través de la API
      this.calendarService.saveAppointment(newAppointment).subscribe(response => {
        alert('Cita guardada correctamente');
        
        // Limpiar la fecha seleccionada y el nombre de la cita
        this.selectedDate = null;
        this.eventName = '';
        this.loadEvents();  // Recargar las fechas disponibles
      }, error => {
        alert('Error al guardar la cita');
      });
    } else {
      alert('Por favor, selecciona una fecha y un nombre');
    }
  }
}
