import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRating } from './user-rating';

@Injectable({
  providedIn: 'root'
})
export class UserratingService {
  private baseurl: string = "http://localhost:8080"
  rating: any;

  constructor(private httpClient: HttpClient) { }

  //get method for obtainig user ratings and reviews
  getUserRatingByEmai(userId:any){
    return this.httpClient.get<UserRating[]>(this.baseurl +"/rate" + userId)
  }
}
