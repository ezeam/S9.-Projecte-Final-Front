import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarService } from '../../../services/calendar.service';
import { CalendarComponent } from '../../../calendar/calendar.component';

@Component({
  selector: 'app-home-chi-sono',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-chi-sono.component.html',
  styleUrls: ['./home-chi-sono.component.scss']
})
export class HomeChiSonoComponent {


}
