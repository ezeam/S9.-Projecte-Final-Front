import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]],
      surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.pattern('(?=.*[A-Z]).{4,8}$')]]
    });
  }

  register() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Please check all required fields';
      this.registerForm.markAllAsTouched();
      return;
    }

    const credentials = this.registerForm.value;

    this.authenticationService.register(credentials).subscribe({
      next: () => {
        this.errorMessage = '';
        this.router.navigate(['/']);
      },
      error: (error) => {        
        this.errorMessage = error?.error?.msg 
        console.error('Registration error:', error);
      },
      complete: () => {
        console.log('Registration observable completed');
      },
    });
  }
}
