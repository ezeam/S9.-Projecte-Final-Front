import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GestioneClientiComponent } from './components/gestione-clienti/gestione-clienti.component';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FullCalendarModule } from '@fullcalendar/angular';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FullCalendarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'EducareInPositivo';  
 }

