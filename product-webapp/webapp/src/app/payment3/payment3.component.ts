import { Component, OnInit } from '@angular/core';
import { Product } from '../component/productdetails/product';
import { ProductDetailsService } from '../component/productdetails/product-details.service';

@Component({
  selector: 'app-payment3',
  templateUrl: './payment3.component.html',
  styleUrls: ['./payment3.component.css']
})
export class Payment3Component implements OnInit {
  public abc:Array<Product>=[];
  constructor(private _productdetailsService: ProductDetailsService) { }

  ngOnInit(): void {
    this._productdetailsService.getProductDetailsByEmail("nk@gmail.com").subscribe((data:any)=>{
      console.log("data",data);
      for (let i = 0; i < data.length; i++) {
      this.abc.push(data[i]);
      }
      
      console.log(this.abc);
    });
  }




  }


