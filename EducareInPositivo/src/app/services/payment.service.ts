import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

declare var paypal: any; // Declarar PayPal globalmente

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  constructor(private authenticationService: AuthenticationService) { }

  handleButtonClick() {
    this.authenticationService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.showPayPalButton();
      } else {
        this.redirectToLogin();
      }
    });
  }
  
  redirectToLogin() {
    // Redirige al usuario a la página de login
    window.location.href = '/login'; // Cambia la ruta según tu configuración
  }

  showPayPalButton() { // A ESTO SE LE PUEDEN PASAR PARAMETROS????

    //PINTAR el modal
    const modal = document.getElementById('paypalModal');
    if (modal) {
      modal.classList.add('show'); 
      modal.classList.add('d-block'); 
      modal.setAttribute('aria-hidden', 'false'); 
      modal.style.display = 'block'; 

      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop fade show';
      document.body.appendChild(backdrop);
   
      document.body.classList.add('modal-open');
    }

    // Limpiar el contenedor del botón de PayPal antes de renderizarlo
    const paypalContainer = document.getElementById('paypal-button-container');
    if (paypalContainer) {
      paypalContainer.innerHTML = ''; // Limpiar el contenedor
    }

    // Renderizar el botón de PayPal
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '10.00' // Cambia esto al monto real de la inscripción
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert('Transacción completada por ' + details.payer.name.given_name);
          // Aquí puedes manejar la lógica post-pago
        });
      },
      onError: (err: any) => {
        console.error(err);
        alert('Ocurrió un error con el pago');
      }
    }).render('#paypal-button-container'); // Renderiza el botón en el contenedor del modal
  }

  closeModal() {
    const modal = document.getElementById('paypalModal');
    if (modal) {
      modal.classList.remove('show');
      modal.classList.remove('d-block');
      modal.setAttribute('aria-hidden', 'true');
      modal.style.display = 'none';
      
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }

      document.body.classList.remove('modal-open');
    }
  }
}
