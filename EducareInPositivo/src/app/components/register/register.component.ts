import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AlertNotificationComponent } from '../../alert-notification/alert-notification.component';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, AlertNotificationComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  showPassword = false;
  alertMessage: string | null = null;
  alertStatus: 'success' | 'failed' | null = null;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      name: ['', [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(50), 
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      surname: ['', [
        Validators.required,
        Validators.minLength(2), 
        Validators.maxLength(50), 
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      documentId: ['', [
        Validators.required, 
        Validators.minLength(9), 
        Validators.maxLength(16), 
        // Validators.pattern(/^(?=.*[A-Za-z])[A-Za-z0-9]{9,16}$/)
      ]],      
      address: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100), 
        Validators.pattern('^[a-zA-Z0-9 ]*$')      
      ]],
      email: ['', [
        Validators.required,
         Validators.email
      ]],
      password: ['', [
        Validators.required, 
        Validators.minLength(7),
        Validators.maxLength(60),        
        Validators.pattern('(?=.*[A-Z])(?=.*\\d).{7,}$'),
        this.passwordMatchValidator()
      ]],
      repeatPassword:  [
        { value: '', disabled: true },
        [
          Validators.required, 
          this.repeatPasswordMatchValidator()],
      ],
      acceptTerms: ['', [
        Validators.required,
      ]],
    });

    this.registerForm.get('password')?.valueChanges.subscribe(() => {
      this.updateRepeatPasswordState();
    });
  }

  updateRepeatPasswordState() {
    const passwordControl = this.registerForm.get('password');
    const repeatPasswordControl = this.registerForm.get('repeatPassword');

    if (passwordControl?.valid) {
      repeatPasswordControl?.enable();
    } else {
      repeatPasswordControl?.disable();
      repeatPasswordControl?.reset();
    }
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const repeatPassword = control.parent?.get('repeatPassword')?.value;
      const password = control.value;
      return repeatPassword && password && repeatPassword !== password
        ? { passwordMismatch: true }
        : null;
    };
  };

  repeatPasswordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.parent?.get('password')?.value;
      const repeatPassword = control.value;
      return password && repeatPassword && password !== repeatPassword
        ? { passwordMismatch: true }
        : null;
    };
  };

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  };
 
  register() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Si prega di controllare tutti i campi obbligatori.';
      this.registerForm.markAllAsTouched();
      return;
    }

    const credentials = this.registerForm.value;

    this.authenticationService.register(credentials).subscribe({
      next: () => {
        this.errorMessage = '';                
        this.alertService.alertStatus = 'success';
        this.alertService.alertMessage = 'Registrazione completata con successo.';        
        this.router.navigate(['/']);         
      },
      error: (error) => {               
        this.alertService.alertStatus = 'failed';
        this.alertService.alertMessage = 
          error?.error?.msg || 'Errore del server. Ci scusiamo per l’inconveniente, riprova più tardi.';
        console.error('Registration error:', error?.error?.msg);
        
        this.router.navigate(['/']); // TO-DO: Cuando falle te quedas y muestras el mensaje de error
      },      
      complete: () => {
        // console.log("alertStatus", this.alertService.alertStatus);
      },
    });
  };

}

