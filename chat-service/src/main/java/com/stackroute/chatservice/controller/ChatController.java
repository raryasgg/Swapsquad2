package com.stackroute.chatservice.controller;

import com.stackroute.chatservice.model.Chat;
import com.stackroute.chatservice.service.ChatService;
import com.stackroute.productservice.exception.NoProductExistsInTheRepository;
import com.stackroute.productservice.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/chats")
public class ChatController {


 @Autowired
 private ChatService chatService;


 public ChatController( ChatService chatService){
     this.chatService=chatService;
 }

 @PostMapping("/add")
    public ResponseEntity<Chat> createChat(@RequestBody Chat chat) throws IOException {
     return new ResponseEntity<Chat>(chatService.addChat(chat), HttpStatus.CREATED);
 }

    @Autowired
    @GetMapping("/all")
    public ResponseEntity<List<Chat>> getAllChats(){

            return new ResponseEntity<List<Chat>>(chatService.findallchats(), HttpStatus.OK);
    }
}
