import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl="http://localhost:8080";
  constructor(private httpClient: HttpClient) { }


  public saveTransaction(transaction:any ){
    return this.httpClient.post<Transaction>(this.baseUrl+"/transactionservice/addTransaction",transaction);
  }
}
