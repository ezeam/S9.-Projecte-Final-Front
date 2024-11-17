import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-chi-sono',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-chi-sono.component.html',
  styleUrls: ['./home-chi-sono.component.scss']
})
export class HomeChiSonoComponent {
  @ViewChild('btn') button!: ElementRef<HTMLButtonElement>;

  constructor() {}
  
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.button) return;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = Math.min(scrollTop / scrollHeight, 1);
    const minTop = window.innerHeight * 0.2;
    const maxTop = window.innerHeight * 0.7 - this.button.nativeElement.offsetHeight;
    const newTop = minTop + scrollPercent * (maxTop - minTop);
    this.button.nativeElement.style.top = `${Math.min(Math.max(newTop, minTop), maxTop)}px`;
  }
}
