package com.stackroute.userservice.repo;

import com.stackroute.userservice.model.AccountDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.HashSet;

public interface AccountdetailsRepo  extends MongoRepository<AccountDetails,Integer> {

//    HashSet<AccountDetails> getAccountDataByEmail(String email);
}
