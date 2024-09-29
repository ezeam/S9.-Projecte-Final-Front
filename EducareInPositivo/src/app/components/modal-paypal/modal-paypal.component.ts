import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-modal-paypal',
  standalone: true,
  imports: [],
  templateUrl: './modal-paypal.component.html',
  styleUrl: './modal-paypal.component.scss'
})

export class ModalPaypalComponent {

  constructor (public paymentService: PaymentService) { }

  ngOnInit():void {
    window.scrollTo(0, 0);
  }

  closeModal() {
    this.paymentService.closeModal();
  }
}
