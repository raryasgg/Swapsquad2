import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { Transcation } from '../model/transcation';
import { Userrating } from '../model/userrating';
@Injectable({
  providedIn: 'root'
})
export class TranServiceService {
  private url: string ="http://localhost:8078"
  private urlp: string ="http://localhost:8083"
  private urluser: string ="http://localhost:9999"


  constructor(private httpClient: HttpClient) { }


  getTranscationsByByerEmailId(email:String){
   return this.httpClient.get<Transcation[]>(this.url+ "/BuyerEmail/" +  email)
  }

  getTranscationsBySellerEmailId(email:String){
    return this.httpClient.get<Transcation[]>(this.url+ "/SellerEmail/" +  email)
   }

  getProductByName(name){
    return this.httpClient.get<Product>(this.urlp+ "/api/v1/product/" + name)
   }
  
  ratebyemail(rating:Userrating,email:string){
  return this.httpClient.put<Product>(this.urluser+"/users/rate/"+email,rating);
}
}
