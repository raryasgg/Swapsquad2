import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UserRegistration } from './user-registration';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl="http://localhost:9998/users/user";
  constructor(private httpClient: HttpClient) { }


  registerUser(user: UserRegistration): Observable<Object> {
     console.log(user);
     return this.httpClient.post(`${this.baseUrl}`,user);
  }
}