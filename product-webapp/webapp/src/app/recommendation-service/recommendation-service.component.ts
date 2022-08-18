import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { switchMap} from 'rxjs/operators'
import { IncomingProductData } from '../models/recommendation/incoming-product-data';
import { RecommedationService } from '../services/recommendation-service/recommedation.service';
import { DomSanitizer } from '@angular/platform-browser';

interface Car {
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
  
   
   cars: Car[] = [
    {value: '', viewValue: ''},
    {value: 'Lucknow', viewValue: 'Lucknow'},
    {value: 'Raebareli', viewValue: 'Raebareli'},
    {value: 'Varanasi', viewValue: 'Varanasi'},
  ];
  
  selectedCar = this.cars[0].value;

  selectCar(event: Event) {
    this.selectedCar = (event.target as HTMLSelectElement).value;
    this._recommendationService.getProductRecommendationsByLocation(this.selectedCar).subscribe(data =>{
     
      this.abc=data;
      console.log(this.abc);
    })
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
    this._recommendationService.getgetProductByCategory(this.selectedCategory).subscribe(data =>{
      this.abc=data;
      console.log(this.abc);
   })
   } 
  ngOnInit(): void {
    this._recommendationService.getAllProduct().subscribe((data:any)=>{
      console.log("data",data);
      for (let i = 0; i < data.length; i++) {
      this.abc.push(data[i]);
      }
      console.log(this.abc);
    });
  }
      
     
    // this._recommendationService.getProductRecommendationsByLocation(this.city).subscribe(data =>{
    //   this.abc=data;
    //   this.location=data;
    //   console.log("data[]",this.abc)
    //   this.city=this.location.city
    //   this.state=this.location.state
      
    // });
    // this._recommendationService.getgetProductByCategory(this.category).subscribe(data =>{
    //   this.abc=data;
    //   this.category=data;
    //   console.log("data[]",this.abc)
    //   this.category=this.category.category;
    // });

    // this._recommendationService.getgetProductRecommendationByCityAndCategory(this.city,this.category).subscribe(data =>{
    //   this.abc=data;
    //   this.IncomingProductData=data;
    //   console.log("data[]",this.abc)
    //   this.productId=this.IncomingProductData.productId
    //   this.productOwnerEmail=this.IncomingProductData
    //   this.productName=this.IncomingProductData.productName
    //   this.state=this.IncomingProductData.state
    //   this.city=this.IncomingProductData.city
    //   this.productCategory=this.IncomingProductData.productCategory
    //  this.productImage=this.domSanitizer.bypassSecurityTrustResourceUrl(

    //   "data:productImage/" + "jpg" + ";base64," + this.IncomingProductData.productImage
    //  );
    
    // });
   


    
  // }

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