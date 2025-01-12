import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-btn-chiamata',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './btn-chiamata.component.html',
  styleUrl: './btn-chiamata.component.scss'
})
export class BtnChiamataComponent {
  openCalendly() {
    window.open('https://calendly.com/educareinpositivo/chiamata-conoscitiva', '_blank');
  }
}
