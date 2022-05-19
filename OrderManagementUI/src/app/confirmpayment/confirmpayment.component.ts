import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-confirmpayment',
  templateUrl: './confirmpayment.component.html',
  styleUrls: ['./confirmpayment.component.css']
})
export class ConfirmpaymentComponent implements OnInit {
  isLoggedIn = false;
  userName = '';
  charge = 0;
  requestId = '';
  componentName = '';

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log('-----2----'+this.isLoggedIn);
    if (this.isLoggedIn) {
      this.route.queryParams.subscribe(params =>{
        console.log('----7-----'+params["userName"]);
        this.userName = params["userName"];
        this.requestId = params["requestId"];
        this.charge = params["charge"];
        this.componentName = params["componentName"];
      });
      
    } else {
      this.router.navigate(['/login']);
    }
  }

}
