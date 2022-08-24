import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailDetails } from './email-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  baseUrl="http://localhost:9292/sendMail";
  constructor(private httpClient: HttpClient) { }


  emailnotification(details: EmailDetails): Observable<Object> {
     return this.httpClient.post(`${this.baseUrl}`,details);
  }
}
