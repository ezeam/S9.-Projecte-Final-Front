import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-notice',
  standalone: true,
  imports: [CommonModule], // Importa aquí los módulos que uses en el componente
  templateUrl: './cookie-notice.component.html',
  styleUrls: ['./cookie-notice.component.scss']
})
export class CookieNoticeComponent {
  showCookieNotice: boolean = true;

  ngOnInit(): void {
    this.checkCookie();
  }

  checkCookie(): void {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'true') {
      this.showCookieNotice = false;
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.showCookieNotice = false;
  }
}
