import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-webinar',
  standalone: true,
  imports: [],
  templateUrl: './webinar.component.html',
  styleUrl: './webinar.component.scss'
})
export class WebinarComponent implements OnInit {

  constructor(public paymentService: PaymentService) { }

  ngOnInit():void {
    window.scrollTo(0, 0);
    }
  
  showPayPalButton() {
    this.paymentService.showPayPalButton();
  }
}
