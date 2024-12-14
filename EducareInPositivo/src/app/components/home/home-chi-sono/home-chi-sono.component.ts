import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CalendarService } from '../../../services/calendar.service';
import { CalendarComponent } from '../../../calendar/calendar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertNotificationComponent } from '../../../alert-notification/alert-notification.component';
import { BtnChiamataComponent } from '../../btn-chiamata/btn-chiamata.component';

import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-home-chi-sono',
  standalone: true,
  imports: [RouterModule, CommonModule, AlertNotificationComponent, BtnChiamataComponent],
  templateUrl: './home-chi-sono.component.html',
  styleUrls: ['./home-chi-sono.component.scss']
})

export class HomeChiSonoComponent implements OnInit {
  alertMessage: string | null = null;
  alertStatus: 'success' | 'failed' | null = null;

  constructor(
    public alertService: AlertService
  ){}

  ngOnInit(): void {
    if (this.alertService.alertMessage) {
      this.alertMessage = this.alertService.alertMessage;
      this.alertStatus = this.alertService.alertStatus;

      /*
      setTimeout(() => {
        this.dismissAlert();
      }, 5000); // Ocultar el mensaje en 5 segundos?
      */
    }
  }

  dismissAlert(): void {
    this.alertMessage = null;
    this.alertService.alertStatus = null;
    this.alertService.alertMessage = null;
  }
}
