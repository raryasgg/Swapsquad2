package Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import Exception.TransactionNotFOund;
import Model.Transaction;
import Repository.TransactionRepository;

public class TransactionServiceImplementation  {
	@Autowired
	
	private TransactionRepository repositry;


	public  Transaction getBysellerEmail(String sellerEmail) throws TransactionNotFOund {
    	Optional<Transaction> sE =  repositry.findOne(sellerEmail);
		if (sE.isPresent()) {
			return sE.get();
		} else {
			throw new TransactionNotFOund ();
		}
    }
	
	
public  Transaction getBybuyerEmail(String buyerEmail) throws TransactionNotFOund {
    	Optional<Transaction> bE = repositry.findOne(buyerEmail);
		if (bE.isPresent()) {
			return bE.get();
		} else {
			throw new TransactionNotFOund ();
		}
    }
	

}
