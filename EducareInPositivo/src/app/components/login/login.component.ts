import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';  
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { AlertNotificationComponent } from "../../alert-notification/alert-notification.component";
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink, CommonModule, AlertNotificationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  isLoggedIn: boolean = false;
  alertMessage: string | null = null;
  alertStatus: 'success' | 'failed' | null = null;

  constructor(private fb: FormBuilder,private authentication: AuthenticationService,
    private router: Router,
    private location: Location,
    public alertService: AlertService,
  ) {}

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Controlla per favore che tutti i campi obbligatori siano compilati';
      this.loginForm.markAllAsTouched();
      return;
    }

    const credentials = this.loginForm.value;

    this.authentication.login(credentials).subscribe({
      next: () => {
        this.alertMessage = null;
        this.alertStatus = null;
        this.location.back();
      },
      error: (error) => {
        this.alertMessage = error?.error?.msg || 'Errore durante il login';
        this.alertStatus = 'failed';
        console.error('Login error:', error);
      },
    });
  };

  logout() {
    this.authentication.logout();
    // TO-DO: JIRA indica poner mensaijito de: "Te echaremos de menos"
    this.router.navigate(['/']);
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.authentication.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });

    // Gestión de las alertas
    if (this.alertService.alertMessage) {
      this.alertMessage = this.alertService.alertMessage;
      this.alertStatus = this.alertService.alertStatus;
    };
  }

  // Gestión de las alertas
  dismissAlert(): void {
    this.alertMessage = null;
    this.alertService.alertStatus = null;
    this.alertService.alertMessage = null;
  };

  onAlertClosed(): void {
    this.alertMessage = null; 
  };

}
