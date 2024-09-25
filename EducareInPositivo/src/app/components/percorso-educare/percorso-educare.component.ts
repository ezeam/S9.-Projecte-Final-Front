import { Component, OnInit } from '@angular/core';

declare var paypal: any; // Declarar PayPal globalmente

@Component({
  selector: 'app-percorso-educare',
  standalone: true,
  imports: [],
  templateUrl: './percorso-educare.component.html',
  styleUrls: ['./percorso-educare.component.scss'
  ]
})
export class PercorsoEducareComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  showPayPalButton() {
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
}
