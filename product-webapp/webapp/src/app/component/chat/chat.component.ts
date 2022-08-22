
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat/chat';
import { Message } from 'src/app/models/chat/message';
import { ChatService } from 'src/app/services/chat/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatForm: FormGroup;
  chatObj: Chat = new Chat();
  messageObj: Message = new Message();
  chatId: number = 12;
  constructor(private chatService: ChatService, private router: Router) {
    this.chatForm = new FormGroup({
      replymessage: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  sendMessage() {
    console.log(this.chatForm.value);
    
    this.messageObj.replymessage = this.chatForm.value.replymessage;
    this.chatService.updateChat(this.messageObj, this.chatId).subscribe(data => {
      console.log(data);
      this.chatForm.reset();
    })
  }

}
