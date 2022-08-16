package com.stackroute.cgi.Transaction_History.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import Model.Transaction;


@Repository
@Transactional

public interface TransactionRepository extends MongoRepository<Transaction, Integer> {

	Optional<Transaction> findOne(String sellerEmail);

	Transaction getBysellerEmail(String sellerEmail);

	Transaction getBybuyerEmail(String buyerEmail);

	

	


}
