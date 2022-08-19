package com.stackroute.chatservice.service;

import com.stackroute.chatservice.exception.ChatAlreadyExistException;
import com.stackroute.chatservice.exception.ChatNotFoundException;
import com.stackroute.chatservice.exception.NoChatExistsInTheRepository;
import com.stackroute.chatservice.model.Chat;
import com.stackroute.chatservice.model.Message;

import java.util.HashSet;
import java.util.List;

public interface ChatService {

    public Chat addChat(Chat chat) throws ChatAlreadyExistException;

    List<Chat> findallchats() throws NoChatExistsInTheRepository;

    Chat getById(int chatId) throws ChatNotFoundException;

    HashSet<Chat> getChatByBuyerEmail(String email) throws ChatNotFoundException;

    HashSet<Chat> getChatByOwnerEmail(String email) throws ChatNotFoundException;

    HashSet<Chat> getChatByOwnerEmailAndBuyerEmail(String ownerEmail, String buyerEmail) throws ChatNotFoundException;


    Chat addMessage(Message add, int chatId);
}
