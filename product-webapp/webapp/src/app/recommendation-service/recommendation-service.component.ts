import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { switchMap} from 'rxjs/operators'
import { IncomingProductData } from '../models/recommendation/incoming-product-data';
import { RecommedationService } from '../services/recommendation-service/recommedation.service';


@Component({
  selector: 'app-recommendation-service',
  templateUrl: './recommendation-service.component.html',
  styleUrls: ['./recommendation-service.component.css']
})
export class RecommendationServiceComponent implements OnInit {
  [x: string]: any;

value:any;
recommendationForm:FormGroup;
title = 'Ip-geolocation';
userIP:'';
  
  productId:number;
   productOwnerEmail:String;
   productName:String;
   state:String;
  city:String;
productCategory:String;
  productImage:any; 


  public IncomingProductData:any;
  public category:any;
  public location:any;

  constructor(private httpClient:HttpClient,private _recommendationService: RecommedationService ) {
    this.recommendationForm = new FormGroup({
      city: new FormControl(),
      productCategory: new FormControl(),
      
    });
   }
  ngOnInit(): void {
    this._recommendationService.getProductRecommendationsByLocation("Raebareli").subscribe(data =>{
      this.location=data;
      console.log(this.location)
      this.city=this.location.city
      this.state=this.location.state
      
    });
    this._recommendationService.getgetProductRecommendationByCityAndCategory("Jhansi","Automobiles").subscribe(lo =>{
     this.IncomingProductData=lo;
     console.log(this.IncomingProductData)
      this.productId=this.IncomingProductData.productId
      this.productOwnerEmail=this.IncomingProductData
      this.productName=this.IncomingProductData.productName
      this.state=this.IncomingProductData.state
      this.city=this.IncomingProductData.city
      this.productCategory=this.IncomingProductData.productCategory
     this.productImage=this.domSanitizer.bypassSecurityTrustResourceUrl(

      "data:img/" + "jpg" + ";base64," + this.IncomingProductData.image
     );
    
    });
    this._recommendationService.getgetProductByCategory("Automobiles").subscribe(cat =>{
      this.category=cat;
      console.log(this.category)
      this.category=this.category.category;
    })


    
  }
 





recommendObj: IncomingProductData = new IncomingProductData();

    onSelect(){
      console.log(this.recommendationForm.value)
  
      this.recommendObj.city = this.recommendationForm.value.city;
      this.recommendObj.productCategory = this.recommendationForm.value.productCategory;
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