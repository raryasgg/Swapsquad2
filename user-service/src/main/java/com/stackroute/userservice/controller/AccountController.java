package com.stackroute.userservice.controller;

import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.repo.AccountdetailsRepo;
import com.stackroute.userservice.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;

@RestController
@RequestMapping("")
public class AccountController {
    @Autowired
    private AccountService accservice;


  @PostMapping("/user")
   public ResponseEntity<AccountDetails> saveuser (@RequestBody AccountDetails adduser){
      return new ResponseEntity<AccountDetails>(accservice.add(adduser),org.springframework.http.HttpStatus.CREATED);

   }

   @GetMapping("/user/{accountNumber}")
   public ResponseEntity<AccountDetails> getAccountByEmail(@PathVariable int accountNumber){
      return new ResponseEntity<AccountDetails>(accservice.getById(accountNumber),org.springframework.http.HttpStatus.OK);
   }
//@GetMapping("/user/{email}")
//  public ResponseEntity<?> getAccountDataByEmail (@PathVariable String email){
//      ArrayList<AccountDetails> getacc = this.accservice.getAccountDataByEmail(email);
//      return new ResponseEntity<>(getacc, HttpStatus.OK);
//  }



}
