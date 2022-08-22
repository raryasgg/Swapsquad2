import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account-data/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseurl="http://localhost:9999/user"
  private baserurla="http://localhost:9999/"

  constructor(private httpClient: HttpClient) { }

  // public addAccount(accountObj:any){
   
  //   return this.httpClient.post<Account>(this.baseurl , accountObj);
  // }

  addAccount(user: Account): Observable<Object> {
    console.log(user);
    return this.httpClient.post(`${this.baseurl}`,user);
 }

 getAccountByAccountNumber(accountNumber:any){
  return this.httpClient.get<Account>(this.baserurla + accountNumber)

 }
}

