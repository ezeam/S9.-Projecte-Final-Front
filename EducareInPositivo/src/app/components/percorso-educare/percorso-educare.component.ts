import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ModalPaypalComponent } from '../modal-paypal/modal-paypal.component';
import { Service } from '../../interfaces/service';
import { BtnChiamataComponent } from "../btn-chiamata/btn-chiamata.component";

@Component({
  selector: 'app-percorso-educare',
  standalone: true,
  templateUrl: './percorso-educare.component.html',
  styleUrls: ['./percorso-educare.component.scss'],
  imports: [ModalPaypalComponent, BtnChiamataComponent],  
})

export class PercorsoEducareComponent implements OnInit {

  name: string | null = null;
  price: number | null = null;
  serviceId: number = 1;

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
    this.paymentService.getServiceData().subscribe(
      (response: Service[]) => {
        const servicioBuscado = response.find((servicio: Service) => servicio.id_service === 1);
        if (servicioBuscado) {
          this.name = servicioBuscado.name_service;
          this.price = servicioBuscado.price_service;
        } else {
          console.warn('Servicio con id_service 1 no encontrado.');
          this.price = null;
        }
      },
      (error) => {
        console.error('Error al cargar el precio:', error);
      }
    );
  }


  handleButtonClick(){
    if (this.name && this.price) {
      this.paymentService.handleButtonClick(this.name, this.price, this.serviceId);
    }
  }  
}
