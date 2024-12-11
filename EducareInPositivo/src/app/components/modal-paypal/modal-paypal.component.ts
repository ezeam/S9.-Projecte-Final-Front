import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-modal-paypal',
  standalone: true,
  imports: [],
  providers: [PaymentService],
  templateUrl: './modal-paypal.component.html',
  styleUrl: './modal-paypal.component.scss'
})

export class ModalPaypalComponent {

  constructor (public paymentService: PaymentService) { }

  ngOnInit():void {
    window.scrollTo(0, 0);
  }

  getNameValue() {
    return this.paymentService.serviceName;
  }

  getPriceValue() {
    return this.paymentService.servicePrice;
  }

  closeModal() {
    this.paymentService.closeModal();
  }
}
