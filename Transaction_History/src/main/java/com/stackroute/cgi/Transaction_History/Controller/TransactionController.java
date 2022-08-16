package com.stackroute.cgi.Transaction_History.Controller;

import java.util.Optional;

import com.stackroute.cgi.Transaction_History.Repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Model.Transaction;
import Service.TransactionService;
@RestController

public class TransactionController {
	@Autowired
	private TransactionRepository repositry;
//Add Transactions
	@PostMapping ("/addTransaction")
	//generate sequence
	
    public String saveTransaction(@RequestBody Transaction transaction){
		Transaction sc = new Transaction();
		sc.setTransactionId(TransactionService.getNextSequence("DatabaseSequence"));
		repositry.save(transaction);
				return "Transaction Added ";

}
	//Find by transactionId
    @GetMapping("/findTransactions/{transactionId}")
    public Optional<Transaction> getTransactionbyId(@PathVariable int transactionId){
    return repositry.findById(transactionId);
    }	
//   //Find by SellerMail
//    @SuppressWarnings("unchecked")
//	@GetMapping("/findBySellerEmail/{sellerEmail}")
//    public ResponseEntity<Transaction> getTransactionBysellerEmail(@PathVariable String sellerEmail)
//    {
//        try{
//			return new ResponseEntity<Transaction>(repositry.getBysellerEmail(sellerEmail),
//					org.springframework.http.HttpStatus.OK);
//        }catch (TransactionNotFOund e) {
//			// TODO Auto-generated catch block
//			return new ResponseEntity("No Data Found", org.springframework.http.HttpStatus.NOT_FOUND);
//		}
//
//		}
//  //Find by BuyerMail
//    @SuppressWarnings("unchecked")
//	@GetMapping("/findByBuyerEmail/{buyerEmail}")
//    public ResponseEntity<Transaction> getTransactionBybuyerEmail(@PathVariable String buyerEmail){
//        try{
//			return new ResponseEntity<Transaction>(repositry.getBybuyerEmail(buyerEmail),
//					org.springframework.http.HttpStatus.OK);
//		}
//       catch (TransactionNotFOund e) {
//			// TODO Auto-generated catch block
//			return new ResponseEntity("No Data Found", org.springframework.http.HttpStatus.NOT_FOUND);
//		}
//		}
//
        //for deleting Transaction
    @DeleteMapping("/delete/{transactionId}")
    public  String deleteTransaction(@PathVariable int transactionId){
    	repositry.deleteById(transactionId);
    return  "Transaction deleted with id:"+transactionId;

    }

}
