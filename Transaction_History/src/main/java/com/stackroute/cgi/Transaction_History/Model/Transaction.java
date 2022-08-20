package com.stackroute.cgi.Transaction_History.Model;

import java.util.Date;
import java.util.List;

import lombok.Data;
import lombok.Generated;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "transaction")
@EntityScan
@Data
public class Transaction {
    @Transient

    public static final String SEQUENCE_NAME = "user_sequence";

    @Id
    private long transactionId;
    private Date date = new Date(System.currentTimeMillis());


    private String buyerEmail;
    private String sellerEmail;
    private String productSend;
    private String productObtained;
    private String method_of_Transaction;
    private Double price_of_Product_in_coins;
    private String historyDetails;
    private List<String> exchangeProductList;


}
