package com.stackroute.chatservice.service;

import com.stackroute.chatservice.exception.ChatAlreadyExistException;
import com.stackroute.chatservice.model.Chat;
import com.stackroute.chatservice.repository.ChatRepository;
import com.stackroute.productservice.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChatServiceImpl implements ChatService{

@Autowired
    private ChatRepository chatRepository;



    public Chat addChat(Chat chat) {
        return chatRepository.save(chat);

    }

    @Override
    public List<Chat> findallchats() {
        return chatRepository.findAll();
    }


}
