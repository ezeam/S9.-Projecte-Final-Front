import { Component, OnInit } from '@angular/core';
import { Service } from '../../interfaces/service';
import { PaymentService } from '../../services/payment.service';
import { ModalPaypalComponent } from "../modal-paypal/modal-paypal.component";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ModalPaypalComponent, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  services: { 
    id: number, 
    name: string | null, 
    price: number | null 
    description: string | null;
  }[] = [    
    { id: 1, name: null, price: null, description: null },
    { id: 2, name: null, price: null, description: null },
    { id: 3, name: null, price: null, description: null },
    { id: 4, name: null, price: null, description: null },
    { id: 5, name: null, price: null, description: null }
  ];

  constructor(public paymentService: PaymentService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadPrices(); // Cargar precios y nombres de todos los servicios
  }

  // Método genérico para cargar el nombre y precio por ID
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

  // Método para cargar todos los precios y nombres de los servicios
  async loadPrices() {
    try {
      for (const service of this.services) {
        service.name = await this.loadNameById(service.id); // Nombre del servicio
        service.price = await this.loadPriceById(service.id); // Precio del servicio
      }
    } catch (error) {
      console.error('Error al cargar todos los precios:', error);
    }
  }

  // Método genérico para manejar el click de cualquier botón
  handleButtonClick(serviceId: number): void {
    const service = this.services.find(s => s.id === serviceId);
    if (service && service.name && service.price) {
      this.paymentService.handleButtonClick(service.name, service.price, service.id);
    }
  }
}
