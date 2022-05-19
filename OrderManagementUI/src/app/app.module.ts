import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';

import { ProductAddComponent } from './product-add/product-add.component';
import { LoginComponent } from './login/login.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductConfirmationComponent } from './product-confirmation/product-confirmation.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ConfirmpaymentComponent } from './confirmpayment/confirmpayment.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductAddComponent,
    LoginLayoutComponent,
    PageLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ProductConfirmationComponent,
    CreditCardComponent,
    ConfirmpaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
