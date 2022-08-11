import { Component, OnInit } from '@angular/core';
import { pid } from 'process';
import { Product } from './product';
import { ProductDetailsService } from './product-details.service';

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
  pexchangetype="Mode of payment";
  desc="";
  img1="assets/1.jpg";
  img2="assets/2.jpg";
  img3="assets/3.jpeg";
  img4="assets/4.jpeg";
  img5="assets/5.jpeg";
  img6="assets/6.jpeg";
  // img=['assets/3.jpeg','assets/4.jpeg','assets/5.jpeg','assets/6.jpeg','assets/2.jpg']
  
  

  
  showimg3:boolean=false
   showimg4:boolean=false
   showimg5:boolean=false
   showimg6:boolean=false
   showimg2:boolean=false
   showmainimg:boolean=true
  

  doZoom3(){
    this.showimg3=true
    this.showmainimg=false
    this.showimg2=false
    this.showimg4=false
    this.showimg5=false
    this.showimg6=false
    
  }
  doZoom4(){
    this.showimg4=true
    this.showmainimg=false
    this.showimg3=false
    this.showimg5=false
    this.showimg6=false
    this.showimg2=false
  }
  doZoom5(){
    this.showimg5=true
    this.showmainimg=false
    this.showimg3=false
    this.showimg4=false
    this.showimg6=false
    this.showimg2=false
    
  }
  doZoom6(){
    this.showimg6=true
    this.showmainimg=false
    this.showimg3=false
    this.showimg4=false
    this.showimg5=false
    this.showimg2=false
    
  }
  doZoom2(){
    this.showimg2=true
    this.showmainimg=false
    this.showimg3=false
    this.showimg4=false
    this.showimg6=false
    this.showimg5=false
    
  }
  public productdata:any;
  constructor(private _productdetailsService: ProductDetailsService ) { }
  
ngOnInit(): void {
  // console.log("working...")
  // console.log(this._productdetailsService)
  // this._productdetailsService.getProductdetailsById(1)
  // .subscribe(data => this.productdata =data)

  this._productdetailsService.getProductDetailsById(1).subscribe(data =>{
    this.productdata =data;
    console.log(this.productdata)
    this.pname=this.productdata.pname
    this.pmail=this.productdata.pmail
    this.plocation=this.productdata.plocation
    this.pdate=this.productdata.pdate
    this.pcoin=this.productdata.pcoin
    this.pexchangetype=this.productdata.pexchange
    this.desc=this.productdata.desc


  });


  }
 
  }

