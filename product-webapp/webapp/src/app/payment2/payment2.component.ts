import { Component, OnInit } from '@angular/core';
import { Product } from '../component/productdetails/product';
import { ProductDetailsService } from '../component/productdetails/product-details.service';
@Component({
  selector: 'app-payment2',
  templateUrl: './payment2.component.html',
  styleUrls: ['./payment2.component.css']
})
export class Payment2Component implements OnInit {

  // pmail="raju@gmail.com";
  // pname="One Plus 9r";
  // public productdata:any;
  // pid:number
  // pemail:string
  // pname:string
  // public product:any;
  //  products:Product[];
  public abc:Array<Product>=[];
  constructor(private _productdetailsService: ProductDetailsService) { }

  ngOnInit(): void {



   this._productdetailsService.getProductDetailsByEmail("kkk@gmail.com").subscribe((data:any)=>{
      console.log("data",data);
      for (let i = 0; i < data.length; i++) {
      this.abc.push(data[i]);
      }
      
      console.log(this.abc);
    });
  }


      //  this.product =data;
      // console.log(this.product)
      // this.pid=this.product.pid
      // this.pname=this.product.pname
      // this.pcategory=this.productdata.pcategory
      // this.plocation=this.productdata.plocation
      // this.pdate=this.productdata.pdate
      // this.pdatepost=this.productdata.pdatepost
      // this.pcoin=this.productdata.pcoin
      // this.pexchange=this.productdata.pexchange
      // this.pexchangetype=this.productdata.pexchangetype
      // this.desc=this.productdata.desc
  //   })
  // }

}
