import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-supporto-personalizzato',
  standalone: true,
  imports: [],
  templateUrl: './supporto-personalizzato.component.html',
  styleUrl: './supporto-personalizzato.component.scss'
})
export class SupportoPersonalizzatoComponent implements OnInit{

  constructor (public paymentService: PaymentService) { }

  ngOnInit():void {
    window.scrollTo(0, 0);
  }
    
  showPayPalButton() {
    this.paymentService.showPayPalButton();
  }
}
