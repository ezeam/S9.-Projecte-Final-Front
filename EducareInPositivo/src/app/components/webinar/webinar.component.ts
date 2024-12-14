import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { ModalPaypalComponent } from "../modal-paypal/modal-paypal.component";
import { Service } from '../../interfaces/service';
import { BtnChiamataComponent } from "../btn-chiamata/btn-chiamata.component";

@Component({
  selector: 'app-webinar',
  standalone: true,
  imports: [ModalPaypalComponent, BtnChiamataComponent],
  templateUrl: './webinar.component.html',
  styleUrl: './webinar.component.scss'
})
export class WebinarComponent implements OnInit {

  namePannolino: string | null = null;
  pricePannolino: number | null = null;
  serviceIdPannolino: number = 3;

  nameAmbientamento: string | null = null;
  priceAmbientamento: number | null = null;
  serviceIdAmbientamento: number = 4;
  
  nameCapricci: string | null = null;
  priceCapricci: number | null = null;
  serviceIdCapricci: number = 5;

  constructor(public paymentService: PaymentService) { }

  ngOnInit():void {
    window.scrollTo(0, 0);
    this.loadPrices();
    }
  
  handleButtonClickPannolino(){
    this.namePannolino && this.pricePannolino && this.paymentService.handleButtonClick(this.namePannolino, this.pricePannolino, this.serviceIdPannolino);
  }

  handleButtonClickAmbientamento(){    
    this.nameAmbientamento && this.priceAmbientamento && this.paymentService.handleButtonClick(this.nameAmbientamento, this.priceAmbientamento, this.serviceIdAmbientamento);
  }

  handleButtonClickCapricci(){    
    this.nameCapricci && this.priceCapricci && this.paymentService.handleButtonClick(this.nameCapricci, this.priceCapricci, this.serviceIdCapricci);
  }

  loadPriceById(id: number): Promise<number | null> {
    return new Promise((resolve, reject) => {
      this.paymentService.getServiceData().subscribe(
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

  loadNameById(id: number): Promise<string | null> {
    return new Promise((resolve, reject) => {
      this.paymentService.getServiceData().subscribe(
        (response: Service[]) => {
          const service = response.find(service => service.id_service === id);

          if (service) {
            resolve(service.name_service);
          } else {
            console.warn(`Servicio con id_service ${id} no encontrado.`);
            resolve(null);
          }
        },
        (error) => {
          console.error('Error al cargar el precio:', error);
          reject(error);
        }
      );
    });
  }

  

  // Método para cargar todos los precios
  async loadPrices() {
    try {
      this.namePannolino = await this.loadNameById(3);  // Nombre para el servicio de dejar el pañal
      this.pricePannolino = await this.loadPriceById(3); // Precio para el servicio de dejar el pañal

      this.nameAmbientamento = await this.loadNameById(4); 
      this.priceAmbientamento = await this.loadPriceById(4); 

      this.nameCapricci = await this.loadNameById(5);    
      this.priceCapricci = await this.loadPriceById(5);    
    } catch (error) {
      console.error('Error al cargar todos los precios:', error);
    }
  }
}

