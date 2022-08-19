import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRating } from './user-rating';

@Injectable({
  providedIn: 'root'
})
export class UserratingService {
  private baseurl: string = "http://localhost:9999"
  email: any;

  constructor(private httpClient: HttpClient) { }

  //get method for obtainig user ratings and reviews
  getUserRatingByEmail(email:any){
    return this.httpClient.get<UserRating[]>(this.baseurl +"/users/user/" + email)
  }
}
