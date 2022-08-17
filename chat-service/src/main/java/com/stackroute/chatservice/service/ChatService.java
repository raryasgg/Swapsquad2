package com.stackroute.chatservice.service;

import com.stackroute.chatservice.model.Chat;
import com.stackroute.productservice.model.Product;

import java.util.List;

public interface ChatService {

   public Chat addChat(Chat chat);
   List<Chat> findallchats();
}
