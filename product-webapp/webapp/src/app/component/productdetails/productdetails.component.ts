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
  pstatus="";
  pdate="15 jul 2022";
  pcoin=20000;
  pexchange="Mode of payment";
  desc="this is description of the product";
  pcategory="";
  
  date:any;
  time:any;
  product:any
  img:any
  
  // img="assets/1.jpg"

  
  
  public productdata:any;
 
  constructor(private _productdetailsService: ProductDetailsService, private domSanitizer: DomSanitizer ) {
    var t=this.pdate
  var a =t.split("")
 this.date=a[0]
   this.time=a[1]
    
   }
  
ngOnInit(): void {
  // console.log("working...")
  // console.log(this._productdetailsService)
  // this._productdetailsService.getProductdetailsById(1)
  // .subscribe(data => this.productdata =data)

  this._productdetailsService.getProductDetailsById(17).subscribe(data =>{
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
      "data:img/" + "jpg" + ";base64," + this.productdata.image[0]
    );


  });
  

  }
 
  }