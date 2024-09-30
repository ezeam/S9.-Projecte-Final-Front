import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var paypal: any; // Declarar PayPal globalmente

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  serviceName: string | null = null;  
  servicePrice: number | null = null;  

  private apiUrl = 'http://localhost:3000/api/services';

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient 
  ) { }

  handleButtonClick(name: string, price: number) {
    this.authenticationService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.showPayPalButton(name, price);
      } else {
        this.redirectToLogin();
      }
    });
  }
  
  redirectToLogin() {
    window.location.href = '/login';
  }

  showPayPalButton(name: string, price: number) { 

    this.serviceName = name;
    this.servicePrice = price;

    console.log('this.serviceName ------->', this.serviceName)
    console.log(' this.servicePrice ----->', this.servicePrice)

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
        console.log("Actions que llegan de paypal", actions);
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: 'EUR',
              value: price
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          console.log("Details que llegan de paypal", details);
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

  getServiceData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
