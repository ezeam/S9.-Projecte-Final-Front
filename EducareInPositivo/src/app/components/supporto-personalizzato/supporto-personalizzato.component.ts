import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { ModalPaypalComponent } from "../modal-paypal/modal-paypal.component";
import { Service } from '../../interfaces/service';
import { BtnChiamataComponent } from "../btn-chiamata/btn-chiamata.component";

@Component({
  selector: 'app-supporto-personalizzato',
  standalone: true,
  imports: [ModalPaypalComponent, BtnChiamataComponent],
  templateUrl: './supporto-personalizzato.component.html',
  styleUrl: './supporto-personalizzato.component.scss'
})
export class SupportoPersonalizzatoComponent implements OnInit{

  name: string | null = null;
  price: number | null = null;
  serviceId: number = 1;

  constructor (public paymentService: PaymentService) { }

  ngOnInit():void {
    window.scrollTo(0, 0);
    this.loadPrice(); 
  }
    
  loadPrice() {
    this.paymentService.getServiceData().subscribe(
      (response: Service[]) => { // Asegúrate de que 'response' sea de tipo 'Service[]'
        const servicioBuscado = response.find((servicio: Service) => servicio.id_service === 1); // Busca por id_service
        if (servicioBuscado) {
          this.name =  servicioBuscado.name_service;
          this.price = servicioBuscado.price_service; // Asigna el precio del servicio encontrado
        } else {
          console.warn('Servicio con id_service 2 no encontrado.');
          this.price = null; // Maneja este caso como prefieras
        }
      },
      (error) => {
        console.error('Error al cargar el precio:', error);
      }
    );
  }

  handleButtonClick(){
    this.name && this.price && this.paymentService.handleButtonClick(this.name, this.price, this.serviceId);
  } 
}
