import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UserRegistration } from './user-registration';

@Injectable({
  providedIn: 'root'
})
export class UpdateDetailsService {
  baseUrl="http://localhost:9998/users/update/";
  constructor(private httpClient: HttpClient) { }


  public update(registerObject:any, profileImage:File){
    const dataObj: FormData=new FormData;
    dataObj.append('str',JSON.stringify(registerObject));
    dataObj.append('file',profileImage);
    return this.httpClient.put<UserRegistration>("http://localhost:9998/users/update/add",dataObj);
  }

  getUserDetailByEmail(email:any){
    return this.httpClient.get<UserRegistration>("http://localhost:9998/users/user/" + email)
  }

  updateEmployee( employees: UserRegistration,email:any): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${email}`, employees);
  }
  update123( updateObj: UserRegistration): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`,  updateObj);
  }

  getUserCoinByEmail(email:any){
    return this.httpClient.get<UserRegistration>("http://localhost:9998/users/user/" + email)
  }
  
exchange( buyeremail:any,selleremail:any,coinOfProduct:any): Observable<Object>{
  return this.httpClient.put("http://localhost:9998/users/exchhange?buyeremail="+buyeremail+"&selleremail="+selleremail+"&newTotalCoins="+coinOfProduct,{});
}

}
