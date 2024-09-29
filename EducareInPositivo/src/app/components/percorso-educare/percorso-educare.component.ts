import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ModalPaypalComponent } from '../modal-paypal/modal-paypal.component';
import { Service } from '../../interfaces/service';

@Component({
  selector: 'app-percorso-educare',
  standalone: true,
  templateUrl: './percorso-educare.component.html',
  styleUrls: ['./percorso-educare.component.scss'],
  imports: [ModalPaypalComponent],  
})

export class PercorsoEducareComponent implements OnInit {

  price: number | null = null;

  constructor(
    public paymentService: PaymentService, 
    private router: Router, 
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadPrice();
  }

  loadPrice() {
    this.paymentService.getServicePrice().subscribe(
      (response: Service[]) => { // Asegúrate de que 'response' sea de tipo 'Service[]'
        const servicioBuscado = response.find((servicio: Service) => servicio.id_service === 1); // Busca por id_service
        if (servicioBuscado) {
          this.price = servicioBuscado.price_service; // Asigna el precio del servicio encontrado
        } else {
          console.warn('Servicio con id_service 1 no encontrado.');
          this.price = null; // Maneja este caso como prefieras
        }
      },
      (error) => {
        console.error('Error al cargar el precio:', error);
      }
    );
  }


  handleButtonClick(){
    this.paymentService.handleButtonClick();
  }  
}
