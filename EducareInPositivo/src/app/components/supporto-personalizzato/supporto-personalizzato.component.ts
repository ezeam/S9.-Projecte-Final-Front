import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supporto-personalizzato',
  standalone: true,
  imports: [],
  templateUrl: './supporto-personalizzato.component.html',
  styleUrl: './supporto-personalizzato.component.scss'
})
export class SupportoPersonalizzatoComponent implements OnInit{
  ngOnInit():void {
    window.scrollTo(0, 0);
    }
}
