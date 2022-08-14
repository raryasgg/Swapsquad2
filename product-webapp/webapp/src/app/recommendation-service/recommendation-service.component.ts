import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-recommendation-service',
  templateUrl: './recommendation-service.component.html',
  styleUrls: ['./recommendation-service.component.css']
})
export class RecommendationServiceComponent implements OnInit {  
  recommendationForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
// for Search bar 
  value = '';

}
