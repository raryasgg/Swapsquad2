import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pid } from 'process';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

   private url: string ="http://localhost:8083"

  constructor(private httpClient: HttpClient) { }
  //get method for obtaining all the product details by id
  //  getProductDetailsById(pid:any): Observable<Product[]>{
  //   return this.httpClient.get<Product[]>(this._url +"api/v1/product/"+1)
   
  // }
   getProductDetailsById(pid:any){
   return this.httpClient.get<Product[]>("http://localhost:8083/api/v1/product/" + pid)
  }
  getProductDetailsByEmail(pemail:any){
    return this.httpClient.get<Product[]>(this.url+ "/api/v1/productavailablebyemail/" + pemail)
   }
updateProductNotAvailable(pid:any){
  return this.httpClient.put(`${"http://localhost:8083/api/v1/products"}/${pid}`,pid);
}
}
