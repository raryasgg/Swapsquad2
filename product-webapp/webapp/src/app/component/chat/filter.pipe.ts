import { Pipe, PipeTransform } from '@angular/core';
import { Chat } from 'src/app/models/chat/chat';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(chat:Chat, senderEmail: string, buyerEmail:string): Chat {
    if(buyerEmail == senderEmail){
      return chat;
    }
    
  }

}
