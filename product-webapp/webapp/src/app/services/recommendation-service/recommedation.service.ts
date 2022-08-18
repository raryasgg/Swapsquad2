import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/recommendation/category';
import { IncomingProductData } from 'src/app/models/recommendation/incoming-product-data';

@Injectable({
  providedIn: 'root'
})
export class RecommedationService {

 
  
  private url: string ="http://localhost:8080"

  constructor(private httpClient: HttpClient) { }
//   IncomingProductData(city:Location,category:Category): Observable<Object> {
//     console.log(city,category);
//     return this.httpClient.post(`${this.url}`,"city" + "category");
//  }

  getProductRecommendationsByLocation(city:String){
   return this.httpClient.get<IncomingProductData[]>(this.url+ "/recommend/" +  city)
  }
  getgetProductRecommendationByCityAndCategory(city:String,category:String){
    return this.httpClient.get<IncomingProductData[]>(this.url+ "/recommendCategory" + '?city='+city+'&category='+category)
   }
   getgetProductByCategory(category:String){
    return this.httpClient.get<IncomingProductData[]>(this.url+ "/Product" + '?category=' + category )
   }
}

