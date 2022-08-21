import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from 'src/app/models/chat/chat';
import { Message } from 'src/app/models/chat/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  baseUrl="http://localhost:9090/chats/message";

  constructor(private httpClient: HttpClient) { }


  updateChat( message:Message ,chatId:any): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${chatId}`, message);
  }


}
