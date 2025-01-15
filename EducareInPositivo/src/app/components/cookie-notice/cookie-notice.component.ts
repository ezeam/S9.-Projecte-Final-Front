import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-notice.component.html',
  styleUrls: ['./cookie-notice.component.scss']
})
export class CookieNoticeComponent {
  showCookieNotice: boolean = true;

  ngOnInit(): void {
    this.checkCookie();
  }

  checkCookie(): void {
    const cookiesAcceptedEducare = this.getCookie('cookiesAcceptedEducare');
    if (cookiesAcceptedEducare === 'true') {
      this.showCookieNotice = false;
    }
  }

  acceptCookies(): void {
    this.setCookie('cookiesAcceptedEducare', 'true', 365);
    this.showCookieNotice = false;
  }

  // Función para obtener el valor de una cookie
  getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  }

  // Función para establecer una cookie
  setCookie(name: string, value: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }
}
