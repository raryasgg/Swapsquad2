package com.stackroute.chatservice.repository;

import com.stackroute.chatservice.model.Chat;
import com.stackroute.chatservice.model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.HashSet;

public interface ChatRepository extends MongoRepository<Chat, Integer> {
    HashSet<Chat> getChatByBuyerEmail(String email);

    HashSet<Chat> getChatByOwnerEmail(String email);

    HashSet<Chat> getChatByOwnerEmailAndBuyerEmail(String ownerEmail, String buyerEmail);
}
