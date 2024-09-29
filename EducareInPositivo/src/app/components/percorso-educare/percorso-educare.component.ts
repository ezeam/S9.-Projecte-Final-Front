import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ModalPaypalComponent } from '../modal-paypal/modal-paypal.component';

@Component({
  selector: 'app-percorso-educare',
  standalone: true,
  templateUrl: './percorso-educare.component.html',
  styleUrls: ['./percorso-educare.component.scss'],
  imports: [ModalPaypalComponent],  
})

export class PercorsoEducareComponent implements OnInit {

  constructor(
    public paymentService: PaymentService, 
    private router: Router, 
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  handleButtonClick(){
    this.paymentService.handleButtonClick();
  }  
}
