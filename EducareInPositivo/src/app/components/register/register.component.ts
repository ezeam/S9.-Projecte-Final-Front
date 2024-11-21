import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';


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
  alertMessage: string = ''; // Mensaje dinámico de la alerta
  showAlert: boolean = false; // Controla si mostrar la alerta

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private location: Location
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
      this.errorMessage = 'Please check all required fields';
      this.registerForm.markAllAsTouched();
      return;
    }

    const credentials = this.registerForm.value;

    this.showSuccessAlert('Empezamos el registro chachi pistachi! :> '); 

    this.authenticationService.register(credentials).subscribe({
      next: () => {
        this.errorMessage = '';
        // this.router.navigate(['/']);
        this.location.back();
        this.location.back();
      },
      error: (error) => {        
        this.errorMessage = error?.error?.msg 
        console.error('Registration error:', error);
      },
      complete: () => {
        // PONEMOS EL MENSAJE DE CONFIRMACIÓN QUE QUERAMOOS
        console.log('Registration observable completed');
               
      },
    });
  };

  // crear esta función para pasar el mensaje
  showSuccessAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  
    // Opción para ocultar automáticamente la alerta
    /*
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
    */
  }

}

