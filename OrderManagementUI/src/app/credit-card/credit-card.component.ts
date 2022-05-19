import { Component, Input, OnInit } from '@angular/core';
import { CreditCardService } from '../_services/credit-card.service';
import { CreditCard } from '../_model/credit-card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
   @Input() form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isUpdate = false;
  
  constructor(
    private creditCardService: CreditCardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  creditCard: CreditCard = {
   cardNumber: null,
    cardHolder: '',
    expiration: '',
    cvv: null
  };

  onSubmit(): void {
    console.log('888888888');
    this.addCreditCard();
    
  }

  addCreditCard(): void {
    this.creditCardService.create(this.form).subscribe(
      data => {
        console.log('---------'+data);
        console.log('---------'+data.requestId);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/paymentConfirmation'], {queryParams :{requestId: data.requestId, userName: data.userName, charge: data.charge, componentName: data.componentName}});
      },
      err => {
        console.log('000000000-'+ err.error.message);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}


