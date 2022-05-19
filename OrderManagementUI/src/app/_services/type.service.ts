import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from '../_model/type';

const API_URL = 'http://localhost:5000/api/v1/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  create(type: Type): Observable<any> {
    return this.http.post(API_URL, type, { responseType: 'json' });
  }

  getAllTypes(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'json' });
  }

  getById(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.get(url, { responseType: 'json' });
  }

  update(id: number, type: Type): Observable<any> {
    console.log(type);
    const url = `${API_URL}/${id}`;
    return this.http.put(url, type, { responseType: 'json' });
  }

  delete(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.delete(url, { responseType: 'json' });
  }
}
