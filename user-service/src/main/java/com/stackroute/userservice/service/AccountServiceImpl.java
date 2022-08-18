package com.stackroute.userservice.service;

import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.repo.AccountdetailsRepo;
import com.stackroute.userservice.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService{
    @Autowired
    private AccountdetailsRepo accrepo;
    @Autowired
    private UserRepo userrep;


    @Override
    public AccountDetails add(AccountDetails adduser) {
        return accrepo.save(adduser);
    }

    @Override
    public AccountDetails getById(int accountNumber) {
        Optional<AccountDetails> accdata = accrepo.findById(accountNumber);
        if(accdata.isPresent()) {
            return accdata.get();
        }
        else{
            return null;
        }
    }

//    @Override
//    public HashSet<AccountDetails> getAccountDataByEmail(String email) {
//        HashSet<AccountDetails> getacc= accrepo.getAccountDataByEmail(email);
//        return getacc ;
//    }


}
