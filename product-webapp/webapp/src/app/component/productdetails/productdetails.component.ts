import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  showimg3:boolean=false
   showimg4:boolean=false
   showimg5:boolean=false
   showimg6:boolean=false
   showimg2:boolean=false
   showmainimg:boolean=true
  constructor() { }

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
  
ngOnInit(): void {
  }
  
  }

