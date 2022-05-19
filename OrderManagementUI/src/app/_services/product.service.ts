import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReturnOrder } from '../_model/returnOrder';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  create(returnOrder: ReturnOrder): Observable<any>{
    var url = API_URL+'addprocessRequest1?username='+returnOrder.userName+'&componentName='+returnOrder.componentName+'&contactNumber='+returnOrder.contactNumber+'&componentType='+returnOrder.componentType+'&quantityOfDefective='+returnOrder.quantityOfDefective+'&isPriorityRequest=false';
    return this.http.get(url, { responseType: 'json' });
    
  }

  getAllProducts(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'json' });
  }

  getById(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.get(url, { responseType: 'json' });
  }

  update(id: number, returnOrder: ReturnOrder): Observable<any> {
    console.log(returnOrder);
    const url = `${API_URL}/${id}`;
    return this.http.put(url, returnOrder, { responseType: 'json' });
  }

  delete(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.delete(url, { responseType: 'json' });
  }
}
