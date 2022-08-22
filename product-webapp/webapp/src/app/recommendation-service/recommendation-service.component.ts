import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { switchMap} from 'rxjs/operators'
import { IncomingProductData } from '../models/recommendation/incoming-product-data';
import { RecommedationService } from '../services/recommendation-service/recommedation.service';
import { DomSanitizer } from '@angular/platform-browser';

interface City {
  value: string;
  viewValue: string;
}
interface Category {
  value: string;
  viewValue: string;
}
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
  productOwnerEmail:any;
  productName:any;
  state:any;
  city:any;
  productCategory:any;
  productImage:any; 


  public IncomingProductData:any;
  public category:any;
  public location:any;
  public abc:Array<IncomingProductData>=[];
  public getproduct:any[]=[];

  constructor(private httpClient:HttpClient,private _recommendationService: RecommedationService ,private domSanitizer:DomSanitizer) {
    this.recommendationForm = new FormGroup({
      city: new FormControl(),
      category: new FormControl(),
          });
   }
  
   
   cities: City[] = [
    {value: '', viewValue: ''},
    {value: 'Lucknow', viewValue: 'Lucknow'},
    {value: 'Raebareli', viewValue: 'Raebareli'},
    {value: 'Varanasi', viewValue: 'Varanasi'},
  ];
  
  selectedCity = this.cities[0].value;

  selectCity(event: Event) {
    this.selectedCity = (event.target as HTMLSelectElement).value;
   if(this.selectedCategory==null){
    return this._recommendationService.getProductRecommendationsByLocation(this.selectedCity).subscribe(data=>{
      this.abc=data;
      console.log(this.abc);

     })
   }
   else{
    this._recommendationService.getgetProductRecommendationByCityAndCategory(this.selectedCity,this.selectedCategory).subscribe(data=>{
        this.abc=data;
        console.log(this.abc);
       })
   }
  

 

  }
  categories: Category[]=[
    {value: '', viewValue: ''},
    {value: 'Electronics', viewValue: 'Electronics'},
    {value: 'AutoMobiles', viewValue: 'AutoMoblies'},
    {value: 'Clothing', viewValue: 'Clothing'},
  ];
   selectedCategory = this.categories[0].value;
   selectCategory(event:Event) {
    this.selectedCategory = (event.target as HTMLSelectElement).value;
    if(this.selectedCity==null){
      return this._recommendationService.getgetProductByCategory(this.selectedCategory).subscribe(data=>{
        this.abc=data;
        console.log(this.abc);
       })
     }
     else{
      this._recommendationService.getgetProductRecommendationByCityAndCategory(this.selectedCity,this.selectedCategory).subscribe(data=>{
          this.abc=data;
          console.log(this.abc);
         })
     }
   } 
  
  ngOnInit(): void {
    this._recommendationService.getAllProduct().subscribe((data:any)=>{
      console.log("data",data);
      for (let i = 0; i < data.length; i++) {
      this.abc.push(data[i]);
      }
      this.abc.map(image=>{
        console.log(image);
        image.productImage=this.domSanitizer.bypassSecurityTrustResourceUrl(
          "data:productImage/" + "jpg" + ";base64," +image.productImage
        );
      })
      console.log(this.abc);
    });
  }
      recommendObj: IncomingProductData = new IncomingProductData();
    onSelect(){
      console.log(this.recommendationForm.value)
        this.recommendObj.city = this.recommendationForm.value.city;
      this.recommendObj.productCategory = this.recommendationForm.value.productCategory;
      this.recommendObj.state = this.recommendationForm.value.state;
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
