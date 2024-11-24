import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alertStatus: 'success' | 'failed' | null = null;
  alertMessage: string | null = null;
}
