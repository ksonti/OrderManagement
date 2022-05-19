import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductAddComponent } from './product-add/product-add.component';
import { LoginComponent } from './login/login.component'; 
import { PageLayoutComponent } from './page-layout/page-layout.component'; 
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { ProductConfirmationComponent } from './product-confirmation/product-confirmation.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ConfirmpaymentComponent } from './confirmpayment/confirmpayment.component';


const routes: Routes = [
  
  // Site routes goes here 
  { 
    path: '', 
    component: LoginLayoutComponent ,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  { 
    path: '', 
    component: PageLayoutComponent ,
    children: [
      { path: 'addProduct', component: ProductAddComponent },
      { path: 'productConfirmation', component: ProductConfirmationComponent},
      { path: 'payment', component: CreditCardComponent},
      { path: 'paymentConfirmation', component: ConfirmpaymentComponent},
      { path: 'updateProduct/:id', component: ProductAddComponent },
      { path: '**', redirectTo: '/product', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
