import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UserRegistration } from './user-registration';

@Injectable({
  providedIn: 'root'
})
export class UpdateDetailsService {
  baseUrl="http://localhost:8080/users/update/add";
  constructor(private httpClient: HttpClient) { }


  public update(registerObject:any, profileImage:File){
    const dataObj: FormData=new FormData;
    dataObj.append('str',JSON.stringify(registerObject));
    dataObj.append('file',profileImage);
    return this.httpClient.post<UserRegistration>("http://localhost:8080/users/update/add",dataObj);
  }
}
