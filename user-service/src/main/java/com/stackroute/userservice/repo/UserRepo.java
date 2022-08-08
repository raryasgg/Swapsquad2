package com.stackroute.userservice.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.stackroute.userservice.model.UserRegistration;
@Repository
@Transactional
public interface UserRepo extends MongoRepository<UserRegistration, String> {

}
