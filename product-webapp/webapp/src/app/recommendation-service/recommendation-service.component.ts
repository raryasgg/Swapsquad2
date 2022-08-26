import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { switchMap,filter} from 'rxjs/operators';
import { IncomingProductData } from '../models/recommendation/incoming-product-data';
import { RecommedationService } from '../services/recommendation-service/recommedation.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


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
searchKey:string="";
public searchTerm : string='';
  
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
  

  constructor(private httpClient:HttpClient,private _recommendationService: RecommedationService ,private domSanitizer:DomSanitizer,private router: Router) {
    this.recommendationForm = new FormGroup({
      city: new FormControl(),
      category: new FormControl(),
          });
   }
  
   
   cities: City[] = [
    {value: '', viewValue: ''},
    {value: 'Andhra Pradesh', viewValue: 'Andhra Pradesh'},
    {value: 'Assam', viewValue: 'Assam'},
    {value: 'Arunachal Pradesh', viewValue: 'Arunachal Pradesh'},
    {value: 'Bihar', viewValue: 'Bihar'},
    {value: 'Chhattisgarh', viewValue: 'Chhattisgarh'},
    {value: 'Goa', viewValue: 'Goa'},
    {value: 'Gujarat', viewValue: 'Gujarat'},
    {value: 'Haryana', viewValue: 'Haryana'},
    {value: 'Himachal Pradesh', viewValue: 'Himachal Pradesh'},
    {value: 'Jharkhand', viewValue: 'Jharkhand'},
    {value: 'Karnataka', viewValue: 'Karnataka'},
    {value: 'Kerala', viewValue: 'Kerala'},
    {value: 'Madhya Pradesh', viewValue: 'Madhya Pradesh'},
    {value: 'Maharashtra', viewValue: 'Maharashtra'},
    {value: 'Manipur', viewValue: 'Manipur'},
    {value: 'Meghalaya', viewValue: 'Meghalaya'},
    {value: 'Nagaland', viewValue: 'Nagaland'},
    {value: 'Odisha', viewValue: 'Odisha'}
  ];
  
  selectedCity = this.cities[0].value;

  selectCity(event: Event) {
    this.selectedCity = (event.target as HTMLSelectElement).value;
   if(!this.selectedCategory){
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
    {value: 'Mobile, Tablet & Accessories', viewValue: 'Mobile, Tablet & Accessories'},
    {value: 'Cars & Bikes', viewValue: 'Cars & Bikes'},
    {value: 'Books & Sports', viewValue: 'Books & Sports'},
    {value: 'Pets & Pet Care', viewValue: 'Pets & Pet Care'},
    {value: 'Electronics & Appliances', viewValue: 'Electronics & Appliances'},
    {value: 'Home & Life Styles', viewValue: 'Home & Life Styles'}
  ];
   selectedCategory = this.categories[0].value;
   selectCategory(event:Event) {
    this.selectedCategory = (event.target as HTMLSelectElement).value;
    console.log(this.selectedCity);
    if(!this.selectedCity){
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
   search(event:any){
     this.searchTerm = (event.target as HTMLInputElement).value;
     console.log(this.searchTerm);
   }


  
   

  


  

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
  
  
 recommendation(productId:any){
  
console.log(productId)

 localStorage.setItem("productId",productId);
 this.router.navigate(["/navbar/productDetail"]);


 }
  
  
}
