import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private url: string ="http://localhost:8083/api/v1/producte/"
  constructor(private httpClient: HttpClient) { }
  getproduct(email:string): Observable<Object> {
    return this.httpClient.get(this.url+email);
 }

}
