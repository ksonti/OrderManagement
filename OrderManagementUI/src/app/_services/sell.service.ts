import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sell } from '../_model/sell';

const API_URL = 'http://localhost:5000/api/v1/sell';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor(private http: HttpClient) { }

  create(sell: Sell): Observable<any> {
    return this.http.post(API_URL, sell, { responseType: 'json' });
  }

  getAllSells(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'json' });
  }

  getOrderDetails(order_id): Observable<any> {
    const url = `${API_URL}/order-details/${order_id}`;
    return this.http.get(url, { responseType: 'json' });
  }

  getOrderItems(order_id): Observable<any> {
    const url = `${API_URL}/order-items/${order_id}`;
    return this.http.get(url, { responseType: 'json' });
  }

  getById(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.get(url, { responseType: 'json' });
  }

  update(id: number, sell: Sell): Observable<any> {
    console.log(sell);
    const url = `${API_URL}/${id}`;
    return this.http.put(url, sell, { responseType: 'json' });
  }

  delete(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.delete(url, { responseType: 'json' });
  }
}
