import { Component, OnInit } from '@angular/core';
import { pid } from 'process';
import { Product } from './product';
import { ProductDetailsService } from './product-details.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {



  pmail="raju@gmail.com";
  pname="One Plus 9r";
  plocation="Patna,Bihar";
  pstatus="Available";
  pdate="";
  pcoin=20000;
  pexchange="car, fan table";
  pexchangetype="coin"
  desc="this is description of the product";
  pcategory="";
  year:any;
  dateofpurchase:String;
  time:String;
  product:any
  img:any
  
  // img1="assets/1.jpg"

  
  
  public productdata:any;
 
  constructor(private _productdetailsService: ProductDetailsService, private domSanitizer: DomSanitizer ) {
   
    
   }
  
ngOnInit(): void {
  // console.log("working...")
  // console.log(this._productdetailsService)
  // this._productdetailsService.getProductdetailsById(1)
  // .subscribe(data => this.productdata =data)

  this._productdetailsService.getProductDetailsById(7).subscribe(data =>{
    this.productdata =data;
    console.log(this.productdata)
    this.pname=this.productdata.pname
    this.pmail=this.productdata.pemail
    this.pcategory=this.productdata.pcategory
    this.plocation=this.productdata.plocation
    this.pdate=this.productdata.pdate
    this.pcoin=this.productdata.pcoin
    this.pexchange=this.productdata.pexchange
    this.desc=this.productdata.desc
    this.img=this.domSanitizer.bypassSecurityTrustResourceUrl(
      "data:img/" + "jpg" + ";base64," + this.productdata.image
    );

    var t=this.pdate;
 
 this.dateofpurchase=t.substring(0,10);
   this.time=t.substring(12,20);


  });
  

  }
 
 
  }