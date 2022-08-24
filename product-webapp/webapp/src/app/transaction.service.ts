import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl="http://localhost:8078/";
  constructor(private httpClient: HttpClient) { }


  public saveTransaction(transaction:any ){
    return this.httpClient.post<Transaction>("http://localhost:8078/addTransaction",transaction);
  }
}
