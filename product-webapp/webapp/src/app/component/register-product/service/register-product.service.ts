import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../class/Product';
import { RegisterProduct } from '../class/register-product';

@Injectable({
  providedIn: 'root'
})
export class RegisterProductService {

  // baseUrl="http://localhost:8080/product/";

  constructor(private httpClient: HttpClient) { }

// registerProduct(registerProduct: RegisterProduct):Observable<object>{
//   console.log(registerProduct);
//   return this.httpClient.post(`${this.baseUrl}`,registerProduct);
// }

public addProduct(registerProduct: RegisterProduct){
  return this.httpClient.post<RegisterProduct>("http://localhost:8080/product/",registerProduct);
}

// public addProduct(registerProduct: FormData){
//   return this.httpClient.post<RegisterProduct>("http://localhost:8080/product/add",registerProduct);
// }


// public addProduct(productObject:any, productImage:File){
//   const dataObj: FormData=new FormData;
//   dataObj.append('str',JSON.stringify(productObject));
//   dataObj.append('file',productImage);

//   return this.httpClient.post<RegisterProduct>("http://localhost:8080/product/add",dataObj);
// }

public addProductDetail(product: Product){
  return this.httpClient.post<RegisterProduct>("http://localhost:8080/product/",product);
}



// Implement addBlog method using HttpClient for a saving a Blog details
// addBlog(product): Observable<any> {
//   return this.httpClient.post<RegisterProduct>("http://localhost:8080/product/",product);
// }
}
