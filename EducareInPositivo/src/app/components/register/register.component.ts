import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert.service';

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
    private alertService: AlertService,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]],
      surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]],
      dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      address: ['', [Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.pattern('(?=.*[A-Z]).{4,}$')]]
    });
  }

  register() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Please check all required fields'; // TO-DO: Traducir al italiano  
      this.registerForm.markAllAsTouched();
      return;
    }

    const credentials = this.registerForm.value;

    this.authenticationService.register(credentials).subscribe({
      next: () => {
        this.errorMessage = '';                
        this.alertService.alertStatus = 'success';
        this.alertService.alertMessage = 'Registrazione completata con successo.';        
        this.router.navigate(['/home']);         
      },
      error: (error) => {               
        this.alertService.alertStatus = 'failed';
        this.alertService.alertMessage = 
          error?.error?.msg || 'Errore del server. Ci scusiamo per l’inconveniente, riprova più tardi.';
        console.error('Registration error:', error?.error?.msg);
        this.router.navigate(['/home']);        
      },      
      complete: () => {
        // console.log("alertStatus", this.alertService.alertStatus);
      },
    });
  };

  

}

