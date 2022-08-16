package com.stackroute.cgi.Transaction_History.Service;

import java.util.Optional;

import com.stackroute.cgi.Transaction_History.Exception.TransactionNotFound;
import com.stackroute.cgi.Transaction_History.Repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;

import Model.Transaction;


public class TransactionServiceImplementation  {
	@Autowired
	
	private TransactionRepository repositry;


	public  Transaction getBysellerEmail(String sellerEmail) throws TransactionNotFound {
    	Optional<Transaction> sE =  repositry.findOne(sellerEmail);
		if (sE.isPresent()) {
			return sE.get();
		} else {
			throw new TransactionNotFound();
		}
    }
	
	
public  Transaction getBybuyerEmail(String buyerEmail) throws TransactionNotFound {
    	Optional<Transaction> bE = repositry.findOne(buyerEmail);
		if (bE.isPresent()) {
			return bE.get();
		} else {
			throw new TransactionNotFound();
		}
    }
	

}
