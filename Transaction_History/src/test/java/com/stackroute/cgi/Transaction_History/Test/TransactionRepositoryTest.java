package com.stackroute.cgi.Transaction_History.Test;

import com.stackroute.cgi.Transaction_History.Exception.TransactionIdNotFound;
import com.stackroute.cgi.Transaction_History.Model.Transaction;
import com.stackroute.cgi.Transaction_History.Service.TransactionServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class TransactionRepositoryTest {
    @Autowired
    TransactionRepositoryTest Repository;
    TransactionServiceImplementation Service;


//public void  getTransactionbyTransactionId () throws TransactionIdNotFound{
//    { Transaction user = new
//            Transaction(8979,"gsfj@gmail.com","ghbnj@gmail.com","Bluetooth","Charger",
//            "ProductExchanged",0.0,"Headphone exchanging only",null); Optional<Transaction> optionalUser = Optional.of(user);
//        when(Repository.getTransactionbyTransactionId(8979));
//        Transaction retreivedUser = (Transaction) Service.getByTransactionId(8979);
//        assertEquals(user.getTransactionId(),
//                retreivedUser.getTransactionId(),"Display All transactions");
//    }
//}


}
