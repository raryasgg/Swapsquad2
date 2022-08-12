import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-recommendation-service',
  templateUrl: './recommendation-service.component.html',
  styleUrls: ['./recommendation-service.component.css']
})
export class RecommendationServiceComponent implements OnInit {  

  constructor() { }

  ngOnInit(): void {
  }
// for Search bar 
  value = '';

}
