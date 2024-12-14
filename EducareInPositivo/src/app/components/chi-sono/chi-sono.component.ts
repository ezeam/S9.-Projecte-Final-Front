import { Component, OnInit } from '@angular/core';
import { BtnChiamataComponent } from "../btn-chiamata/btn-chiamata.component";

@Component({
  selector: 'app-chi-sono',
  standalone: true,
  imports: [BtnChiamataComponent],
  templateUrl: './chi-sono.component.html',
  styleUrl: './chi-sono.component.scss'
})
export class ChiSonoComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
