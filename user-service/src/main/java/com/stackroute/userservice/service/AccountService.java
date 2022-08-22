package com.stackroute.userservice.service;

import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.model.UserRegistration;
import com.stackroute.userservice.repo.AccountdetailsRepo;
import com.stackroute.userservice.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;


public interface AccountService {


   public AccountDetails add(AccountDetails adduser)  throws UserAlreadyExistException ;


//   AccountDetails getById(int accountNumber);

   HashSet<AccountDetails> getAccountDataByEmail(String email) throws UserNotFoundException;

//   HashSet<AccountDetails> getAccountDataByAccNum(int accountNumber) throws UserNotFoundException;




   public UserRegistration addcoin(int amount, String email);


   public String exchange(String buyeremail, String selleremail, int coinOfProduct);


   public String withdraw(int amountWithdraw, String email);


   AccountDetails getById(int accountNumber) throws UserNotFoundException;
}
