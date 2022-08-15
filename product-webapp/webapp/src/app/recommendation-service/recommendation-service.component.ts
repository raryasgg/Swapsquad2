import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { switchMap} from 'rxjs/operators'


@Component({
  selector: 'app-recommendation-service',
  templateUrl: './recommendation-service.component.html',
  styleUrls: ['./recommendation-service.component.css']
})
export class RecommendationServiceComponent implements OnInit {  
value:any;
recommendationForm:FormGroup;
title = 'Ip-geolocation';
userIP:'';
  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not imlemented.')
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
  
  
  
  
  
}
