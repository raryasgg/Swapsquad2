import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  private _url:string="http://localhost:27017/api/v1/product/1"

  constructor(private httpClient: HttpClient) { }
  //get method for obtaining all the product details by id
  getProductdetailsById(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this._url)
   
  }
}
