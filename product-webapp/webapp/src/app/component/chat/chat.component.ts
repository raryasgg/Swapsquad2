
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
  chatId: number = 22;
  public messageList= [];
  replymessage: String = "checking";
  public chatData: any;
  msg = "Good work";

  ownerEmail = "o1@gmail.com"
  buyerEmail = "b1@gmail.com"
  senderEmail = ""

  constructor(private chatService: ChatService, private router: Router) {
    this.chatForm = new FormGroup({
      replymessage: new FormControl()
    });
  }

  ngOnInit(): void {
    this.chatService.getChatById(this.chatId).subscribe(data => {
      this.chatData = data;
      this.messageList = this.chatData.messageList;
    })
  }

  sendMessage() {
    console.log(this.chatForm.value);

    this.messageObj.replymessage = this.chatForm.value.replymessage;
    this.chatService.updateChat(this.messageObj, this.chatId).subscribe(data => {
      console.log(data);
      this.chatForm.reset();

      this.chatService.getChatById(this.chatId).subscribe(data => {
        console.log(data);
        this.chatData = data;
        // console.log(this.chatData.messageList);console.log(JSON.stringify(this.chatData.messageList));
        // console.log(this.chatData.replymessage);
        // console.log(this.chatData.ownerEmail);
        // console.log(this.chatData.buyerEmail);
        this.messageList = this.chatData.messageList;


        // this.chatObj.buyerEmail = "buyer256@gmail.com";
        // this.chatObj.ownerEmail = "owner256@gmail.com";
        // this.chatService.createChatRoom(this.chatObj).subscribe(data =>
        //   console.log(data)
        // )


        // this.chatService.getChatIdByBuyerAndSellerEmail(this.buyerEmail = "rahulowner@gmail.com", this.ownerEmail = "sunnybuyer@gmail.com").subscribe(data => {
        //   console.log(data);
        // })



      })
    })
  }

}
