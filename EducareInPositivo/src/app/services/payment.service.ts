import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { environment } from '../environments/environment';

declare var paypal: any; // Declarar PayPal globalmente

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  serviceName: string | null = null;  
  servicePrice: number | null = null; 
  serviceId: number | null = null;
  orderId: number | null = null;  

  private apiUrl = `${environment.endpoint}/api/services`; // TO-DO: Cambiar ruta cuando haya url/dominio/hosting
  private orderApiUrl = `${environment.endpoint}/api/orders`; // API para la creación de órdenes

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService,
  ) { }

  handleButtonClick(name: string, price: number, serviceId: number) {
    this.authenticationService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.createOrder(name, price, serviceId); // Primero crea la orden en tu base de datos
      } else {
        this.redirectToLogin();
      }
    });
  }
  
  redirectToLogin() {
    window.location.href = '/login';
  }

  // Función para crear la orden en tu base de datos antes de enviar a PayPal
  createOrder(name: string, price: number, serviceId: number) {
    const userId = this.authenticationService.getUserId();
    const orderData = {
      total_amount_order: price,
      payment_method: 'paypal',
      user_id: userId,     
      service_id: serviceId,   
      payment_status: "pending",
      external_order_id: null,
      external_transaction_id: null
    };
  
    this.http.post(`${environment.endpoint}/api/orders/create`, orderData).subscribe(
      (response: any) => {
        console.log('Orden creada en la base de datos:', response);
        if (response && response.id_order) {
          const orderId = response.id_order; 
          this.showPayPalButton(name, price, orderId); 
        } else {
          console.error('La respuesta no contiene id_order:', response);
        }
      },
      (error) => {
        console.error('Error al crear la orden en la base de datos:', error);
      }
    );
  }
  
  showPayPalButton(name: string, price: number, orderId: number) { 
    this.serviceName = name;
    this.servicePrice = price;
    this.orderId = orderId;

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
      createOrder: (data: any, actions: any) => { //Este createorder es el de paypal, no la función que he creado yo
        return actions.order.create({
          purchase_units: [{
            custom_id: orderId.toString(), // Aquí pasas el ID de la orden como reference_id
            amount: {
              currency_code: 'EUR',
              value: price
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          console.log("Detalles de la transacción:", details);
          
          const customId = details.purchase_units[0].custom_id;
          // Aquí envías los detalles de la transacción para actualizar la orden en tu base de datos
          this.updateOrderStatus(customId, details.id, details.status);
          
          console.log(`transaccion. Transacción completada por ${details.payer.name.given_name}`);

          this.alertService.alertStatus = 'success';
          this.alertService.alertMessage = 'Pagamento correctto. Grazie per aver effettuato il suo acquisto.';
          this.router.navigate(['/']); // TO-DO: Poner el nombre del curso comprado
        });
      },
      onError: (err: any) => {
        console.error('Error en el pago', err);

        this.alertService.alertStatus = 'failed';
        this.alertService.alertMessage = 'Errore nel pagamento. La preghiamo di riprovare più tardi.';
        this.router.navigate(['/']);        
        // TO-DO: Redirijimos a la página de SERVICIOS (cuando esté todo unificado en la misma)
      }
    }).render('#paypal-button-container'); // Renderiza el botón en el contenedor del modal
  }

  // Función para actualizar el estado de la orden en el backend después del pago
  updateOrderStatus(orderId: number, transactionId: string, paymentStatus: string) {

    const updateData = {
      external_order_id: orderId,
      external_transaction_id: transactionId,
      payment_status: paymentStatus
    };

    this.http.put(`${this.orderApiUrl}/${orderId}/update`, updateData).subscribe(
      (response) => {
        console.log('Orden actualizada en la base de datos:', response);
      },
      (error) => {
        console.error('Error al actualizar la orden:', error);
      }
    );
    this.closeModal();
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
