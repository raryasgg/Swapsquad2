package com.stackroute.chatservice.repository;

import com.stackroute.chatservice.model.Chat;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChatRepository extends MongoRepository<Chat, Integer> {
}
