package com.stackroute.cgi.Transaction_History.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;
@Document(collection ="DatabaseSequence")
@Component

public class DatabaseSequence {
	@Id
	
	private String transactionId;
	private int seq;
	public String getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	@Override
	public String toString() {
		return "Sequence [transactionId=" + transactionId + ", seq=" + seq + "]";
	}
	
}
