import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [],
  templateUrl: './cookie-policy.component.html',
  styleUrl: './cookie-policy.component.scss'
})
export class CookiePolicyComponent implements OnInit{
  ngOnInit():void {
    window.scrollTo(0, 0);
    }
}
