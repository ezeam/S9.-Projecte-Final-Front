import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webinar',
  standalone: true,
  imports: [],
  templateUrl: './webinar.component.html',
  styleUrl: './webinar.component.scss'
})
export class WebinarComponent implements OnInit {
  ngOnInit():void {
    window.scrollTo(0, 0);
    }
}
