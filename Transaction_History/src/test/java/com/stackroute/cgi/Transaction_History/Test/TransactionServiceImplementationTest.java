package com.stackroute.cgi.Transaction_History.Test;

import com.stackroute.cgi.Transaction_History.Exception.TransactionNotFound;
import com.stackroute.cgi.Transaction_History.Model.Transaction;
import com.stackroute.cgi.Transaction_History.Repository.TransactionRepository;
import com.stackroute.cgi.Transaction_History.Service.TransactionServiceImplementation;
import org.junit.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

public class TransactionServiceImplementationTest {
    TransactionRepository Repository;
    TransactionServiceImplementation Service;
    public Object addNew(Object any) {
        return "Transaction_added";
    }
@Test
    public void getTransactionbysellerEmail() throws TransactionNotFound {
         { Transaction user = new
                Transaction(8979,"gsfj@gmail.com","ghbnj@gmail.com","Bluetooth","Charger",
                 "ProductExchanged",0.0,"Headphone exchanging only",null); Optional<Transaction> optionalUser = Optional.of(user);
            when(Repository.findBySellerEmail("ghbnj@gmail.com"));
            Transaction retreivedUser = (Transaction) Service.getBySellermail("ghbnj@gmail.com");
            assertEquals(user.getSellerEmail(),
                    retreivedUser.getSellerEmail(),"Display All transactions");
        }
    }
@Test
    public void getTransactionbybuyerEmail() throws TransactionNotFound {
        { Transaction user = new
                Transaction(8979,"gsfj@gmail.com","ghbnj@gmail.com","Bluetooth","Charger",
                "ProductExchanged",0.0,"Headphone exchanging only",null); Optional<Transaction> optionalUser = Optional.of(user);
            when(Repository.findBySellerEmail("ghbnj@gmail.com"));
            Transaction retreivedUser = (Transaction) Service.getByBuyeremail("ghbnj@gmail.com");
            assertEquals(user.getSellerEmail(),
                    retreivedUser.getBuyerEmail(),"Display All transactions");
        }
    }
    @Test
    public void  TransactionisNotDoneBySellerEmail () throws TransactionNotFound {
        Optional<Transaction> optionalUser =
                Optional.empty();
        when(Repository.findBySellerEmail("ghbnj@gmail.com"));
        assertThrows(TransactionNotFound.class,()->{
            Service.getBySellermail("ghbnj@gmail.com");}); }

@Test
    public void  TransactionisNotDoneByBuyerEmail () throws TransactionNotFound {
        Optional<Transaction> optionalUser =
                Optional.empty();
        when(Repository.findByBuyerEmail("ghbnj@gmail.com"));
        assertThrows(TransactionNotFound.class,()->{
            Service.getByBuyeremail("ghbnj@gmail.com");}); }


}
