import { Component, OnInit } from '@angular/core';
import  city from '../files/city.json';
@Component({
  selector: 'app-recommendation-service',
  templateUrl: './recommendation-service.component.html',
  styleUrls: ['./recommendation-service.component.css']
})
export class RecommendationServiceComponent implements OnInit {
  
  constructor() { }

  cityvalues=city;
  
  ngOnInit(): void {
  }

}
