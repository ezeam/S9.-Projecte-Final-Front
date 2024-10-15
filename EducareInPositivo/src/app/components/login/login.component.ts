import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';  
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  isLoggedIn: boolean = false;

  constructor(private fb: FormBuilder,private authentication: AuthenticationService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.authentication.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please check all required fields';
      this.loginForm.markAllAsTouched();
      return;
    }

    const credentials = this.loginForm.value;

    this.authentication.login(credentials).subscribe({
      next: () => {
        this.errorMessage = '';
        // this.router.navigate(['/']);        
        this.location.back();
      },
      error: (error) => {
        this.errorMessage = error?.error?.msg;
        console.error('Login error:', error);
      },
      complete: () => {
       // console.log('Login observable completed');

      },
    });
  }

  logout() {
    this.authentication.logout();
    this.router.navigate(['/home']);
  }
}
