package Service;


import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import org.springframework.stereotype.Service;

import com.stackroute.cgi.Transaction_History.TransactionHistoryApplication;

import Model.DatabaseSequence;
@Service

public class TransactionService<DbSequence> {
	public static void main(String[] args) {
		SpringApplication.run(TransactionHistoryApplication.class, args);
	}
	
	@Autowired
	private static MongoOperations mongoOperations;
	
	
	public static int getNextSequence(String  SequenceName) {
		Query  quer = new Query(Criteria.where("transactionId").is(SequenceName));
		Update up = new Update().inc("user_sequence",2);
		DatabaseSequence dbseq = mongoOperations.findAndModify(quer, up, FindAndModifyOptions.options().returnNew(true).upsert(true),DatabaseSequence.class);
		
		return !Objects.isNull(dbseq) ? dbseq.getSeq():1;
	}


	
	

	
}
