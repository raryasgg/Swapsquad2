import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavService {
  private url: string ="http://localhost:9999"
  constructor(private httpClient: HttpClient) { }
  getuserdetails(email:string): Observable<Object> {
    return this.httpClient.get(this.url+"/users/user/"+email);
 }
}
