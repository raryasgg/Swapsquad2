import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { switchMap} from 'rxjs/operators'
import { IncomingProductData } from '../models/recommendation/incoming-product-data';


@Component({
  selector: 'app-recommendation-service',
  templateUrl: './recommendation-service.component.html',
  styleUrls: ['./recommendation-service.component.css']
})
export class RecommendationServiceComponent implements OnInit {

value:any;
recommendationForm:FormGroup;
title = 'Ip-geolocation';
userIP:'';
  constructor(private httpClient:HttpClient) {
    this.recommendationForm = new FormGroup({
      state: new FormControl(),
      productCategory: new FormControl(),
      searchbar: new FormControl(),
    });
   }

  ngOnInit(): void {
    
  }

recommendObj: IncomingProductData = new IncomingProductData();

  onSelect(){
    console.log(this.recommendationForm.value)

    this.recommendObj.state = this.recommendationForm.value.state;
    this.recommendObj.productCategory = this.recommendationForm.value.productCategory;
  }

  // for Search bar 

 loadUserInfo(){
   
   this.httpClient.get('https://jsonip.com/')
   .pipe(
     switchMap((value:any)=>{
      this.userIP =value.ip;




      let url ='http://api.ipstack.com/${value.ip}?access_key=3def43850ecd7df03e512b3e1164df75';

       return this.httpClient.get('url');
     })
   )
   .subscribe(
     (response:any) =>{
       console.log(response)
     }, 
     (error)=>{
       console.log(error)
     }
   )
 }
  
  
  
  
  
}
