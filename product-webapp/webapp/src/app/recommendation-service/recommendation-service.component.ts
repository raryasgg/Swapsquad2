import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-recommendation-service',
  templateUrl: './recommendation-service.component.html',
  styleUrls: ['./recommendation-service.component.css']
})
export class RecommendationServiceComponent implements OnInit {
  recommendationForm: FormGroup;

  constructor() {
    this.recommendationForm = new FormGroup({
      state: new FormControl(),
      category: new FormControl(),
      searchbar: new FormControl(),
    });
  }

  ngOnInit(): void {
  }
  // for Search bar 
  value = '';

}
