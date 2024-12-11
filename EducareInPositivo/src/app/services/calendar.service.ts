import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private apiUrl = `${environment.endpoint.replace(/\/$/, '')}/api/appointments`;

  constructor(private http: HttpClient) {}

  // Obtener las fechas disponibles desde la API
  getAvailableDates(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/dates`);
  }

  // Guardar una cita a través de la API
  saveAppointment(appointment: { date: string, name: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book`, appointment);
  }
}
