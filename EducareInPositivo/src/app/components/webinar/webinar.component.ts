import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { ModalPaypalComponent } from "../modal-paypal/modal-paypal.component";
import { Service } from '../../interfaces/service';

@Component({
  selector: 'app-webinar',
  standalone: true,
  imports: [ModalPaypalComponent],
  templateUrl: './webinar.component.html',
  styleUrl: './webinar.component.scss'
})
export class WebinarComponent implements OnInit {

  pricePannolino: number | null = null;
  priceAmbientamento: number | null = null;
  priceCapricci: number | null = null;

  constructor(public paymentService: PaymentService) { }

  ngOnInit():void {
    window.scrollTo(0, 0);
    this.loadPrices();
    }
  
  handleButtonClick(){
    this.paymentService.handleButtonClick();
  }

  loadPriceById(id: number): Promise<number | null> {
    return new Promise((resolve, reject) => {
      this.paymentService.getServicePrice().subscribe(
        (response: Service[]) => {
          const service = response.find(service => service.id_service === id);
          if (service) {
            resolve(service.price_service); // Resuelve la promesa con el precio
          } else {
            console.warn(`Servicio con id_service ${id} no encontrado.`);
            resolve(null); // Resuelve con null si no se encuentra
          }
        },
        (error) => {
          console.error('Error al cargar el precio:', error);
          reject(error); // Rechaza la promesa en caso de error
        }
      );
    });
  }

  // Método para cargar todos los precios
  async loadPrices() {
    try {
      this.pricePannolino = await this.loadPriceById(3);      // Precio para el servicio de dejar el pañal
      this.priceAmbientamento = await this.loadPriceById(4);  // Precio para el servicio de ambientamiento
      this.priceCapricci = await this.loadPriceById(5);       // Precio para el servicio de no llamarlos caprichos
    } catch (error) {
      console.error('Error al cargar todos los precios:', error);
    }
  }
}

