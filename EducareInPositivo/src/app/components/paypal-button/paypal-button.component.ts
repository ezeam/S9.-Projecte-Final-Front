import { AfterViewInit, Component } from '@angular/core';

declare var paypal: any; // Declarar PayPal globalmente

@Component({
  selector: 'app-paypal-button',
  standalone: true,
  imports: [],
  templateUrl: './paypal-button.component.html',
  styleUrl: './paypal-button.component.scss'
})
export class PaypalButtonComponent implements AfterViewInit {

  constructor() { }

  // Lógica de inicialización de PayPal
  ngAfterViewInit(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '10.00' // Precio del producto
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert('Transaction completed by ' + details.payer.name.given_name);
          // Aquí puedes manejar la lógica post-pago
        });
      },
      onError: (err: any) => {
        console.error(err);
        alert('Ocurrió un error con el pago');
      }
    }).render('#paypal-button-container'); // Muestra el botón en el div con este ID
  }

}
