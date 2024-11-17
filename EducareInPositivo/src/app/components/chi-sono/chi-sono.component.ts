import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-sono',
  standalone: true,
  imports: [],
  templateUrl: './chi-sono.component.html',
  styleUrl: './chi-sono.component.scss'
})
export class ChiSonoComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
