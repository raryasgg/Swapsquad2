import { Component, OnInit } from '@angular/core';
import { pid } from 'process';
import { Product } from './product';
import { ProductDetailsService } from './product-details.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserratingService } from './userrating.service';


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
 pdatepost=""

  pexchangetype="coin"
  desc="this is description of the product";
  pcategory="";
  year:any;
  dateofpurchase:String;
  time:String;
  product:any
  img:any
  dateofposting:any


  //user rating
rate:any;
 review:any
 userId:""
 totalstar='5'



  
  // img1="assets/1.jpg"


  
  
  public productdata:any;
  public userratingdata:any;
  pexchange: any;
  ratings: any;
  avgRating:any;
 
  constructor(private _productdetailsService: ProductDetailsService, private domSanitizer: DomSanitizer,private userratingservice:UserratingService ) {

    
   }
  
ngOnInit(): void {
  // console.log("working...")
  // console.log(this._productdetailsService)
  // this._productdetailsService.getProductdetailsById(1)
  // .subscribe(data => this.productdata =data)


  this._productdetailsService.getProductDetailsById(28).subscribe(data =>{


    this.productdata =data;
    console.log(this.productdata)
    this.pname=this.productdata.pname
    this.pmail=this.productdata.pemail
    this.pcategory=this.productdata.pcategory
    this.plocation=this.productdata.plocation
    this.pdate=this.productdata.pdate
    this.pdatepost=this.productdata.pdatepost
    this.pcoin=this.productdata.pcoin
    this.pexchange=this.productdata.pexchange
    this.pexchangetype=this.productdata.pexchangetype
    this.desc=this.productdata.desc
    this.img=this.domSanitizer.bypassSecurityTrustResourceUrl(

      "data:img/" + "jpg" + ";base64," + this.productdata.image

    );


    var t=this.pdatepost;
 
 this.dateofpurchase=t.substring(0,10);
  // 

  var t2=this.pdate;
  this.dateofposting=t2.substring(0,10)



  });

  this.userratingservice.getUserRatingByEmail("devika@gmail.com").subscribe(dataofrating =>{
    this.userratingdata=dataofrating
    console.log(this.userratingdata)
    this.ratings=this.userratingdata.ratings
    this.avgRating=this.userratingdata.avgRating
    

  })


  

  }
 

  }


function gmail(gmail: any) {
  throw new Error('Function not implemented.');
}

