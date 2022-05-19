import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../_model/credit-card';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient) { }

   create(creditCard: CreditCard): Observable<any>{
    var url = API_URL+'/payment1?creditCardNumber='+creditCard.cardNumber;
    return this.http.get(url, { responseType: 'json' });
    
  }
}
