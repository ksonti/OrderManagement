import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../_model/order';

const API_URL = 'http://localhost:5000/api/v1/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  create(order: Order): Observable<any> {
    return this.http.post(API_URL, order, { responseType: 'json' });
  }

  getAllOrders(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'json' });
  }

  getById(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.get(url, { responseType: 'json' });
  }

  update(id: number, order: Order): Observable<any> {
    console.log(order);
    const url = `${API_URL}/${id}`;
    return this.http.put(url, order, { responseType: 'json' });
  }

  delete(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.delete(url, { responseType: 'json' });
  }
}
