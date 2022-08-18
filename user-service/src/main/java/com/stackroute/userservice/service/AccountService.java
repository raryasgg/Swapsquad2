package com.stackroute.userservice.service;

import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.repo.AccountdetailsRepo;
import com.stackroute.userservice.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;


public interface AccountService {


   public AccountDetails add(AccountDetails adduser);


   AccountDetails getById(int accountNumber);

//   ArrayList<AccountDetails> getAccountDataByEmail(String email);
}
