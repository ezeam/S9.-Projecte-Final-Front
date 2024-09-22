import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percorso-educare',
  standalone: true,
  imports: [],
  templateUrl: './percorso-educare.component.html',
  styleUrl: './percorso-educare.component.scss'
})
export class PercorsoEducareComponent implements OnInit{
  ngOnInit():void {
    window.scrollTo(0, 0);
    }
  }
