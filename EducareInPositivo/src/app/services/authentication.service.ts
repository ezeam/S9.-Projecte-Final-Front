import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('jwtToken'));
  private jwtToken = '';
  private username = new BehaviorSubject<string>(localStorage.getItem('username') || '');
  private userId!: string;
  

  isLoggedIn$ = this.loggedIn.asObservable();
  username$ = this.username.asObservable();

  // Cambia la baseUrl para que incluya la ruta correcta
  private baseUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      this.jwtToken = token;
      this.loggedIn.next(true);
    }
  }

  login(credentials: any): Observable<boolean> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials).pipe(
      map((response) => {
        this.jwtToken = response.accessToken;
        const username = response.user.username;
        this.userId = response.user.id;
        this.loggedIn.next(true);
        this.username.next(username);
        localStorage.setItem('jwtToken', this.jwtToken);
        localStorage.setItem('username', username);
        localStorage.setItem('userId', this.userId);
        return true;
      })
    );
  }  

  register(credentials: any): Observable<boolean> {
    return this.http.post<any>(`${this.baseUrl}/register`, credentials).pipe( // Cambia aquí
      switchMap(() => this.login(credentials))
    );
  }

  get getJwtToken(): string {
    return this.jwtToken;
  }

  logout(): boolean {
    this.jwtToken = '';
    localStorage.clear();
    localStorage.removeItem('username');
    this.loggedIn.next(false);
    this.username.next('');
    return false;
  }

  getUserId(): string | null {
    return localStorage.getItem('userId'); 
  }
}


