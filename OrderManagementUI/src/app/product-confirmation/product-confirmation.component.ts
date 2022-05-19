import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-product-confirmation',
  templateUrl: './product-confirmation.component.html',
  styleUrls: ['./product-confirmation.component.css']
})
export class ProductConfirmationComponent implements OnInit {
isLoggedIn = false;
requestId=0;
public userID : number = null;
processingCharge='';
packagingAndDeliveryCharge='';
dateOfDelivery='';
totalCharge=0;
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
     this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.route.queryParams.subscribe(params =>{
        this.userID = params["userID"];
        this.requestId = params["requestId"];
        this.packagingAndDeliveryCharge = params["packagingAndDeliveryCharge"];
        this.processingCharge = params["processingCharge"];
        this.dateOfDelivery = params["dateOfDelivery"];
        this.totalCharge=params["totalCharge"];
      });
      
    } else {
      this.router.navigate(['/login']);
    }
  }

  loadPaymentPage(): void {
   this.router.navigate(['/payment']); 
  }
}
