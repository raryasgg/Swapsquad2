package Model;

import java.util.Date;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "transaction")
@EntityScan

public class Transaction {
	@Transient
	
	public static final String SEQUENCE_NAME ="user_sequence";
	
	@Id()
	
private int transactionId;
	private Date date =new Date(System.currentTimeMillis()) ; 


private String buyerEmail;
private String sellerEmail;
private String productSend;
private String productObtained;
private String method_of_Transaction;
private int price_of_Product_in_coins;
private String historyDetails;
public int getTransactionId() {
	return transactionId;
}
public void setTransactionId(int transactionId) {
	this.transactionId = transactionId;
}

public String getBuyerEmail() {
	return buyerEmail;
}
public void setBuyerEmail(String buyerEmail) {
	this.buyerEmail = buyerEmail;
}
public String getSellerEmail() {
	return sellerEmail;
}
public void setSellerEmail(String sellerEmail) {
	this.sellerEmail = sellerEmail;
}
public String getProductSend() {
	return productSend;
}
public void setProductSend(String productSend) {
	this.productSend = productSend;
}
public String getProductObtained() {
	return productObtained;
}
public void setProductObtained(String productObtained) {
	this.productObtained = productObtained;
}
public String getMethod_of_Transaction() {
	return method_of_Transaction;
}
public void setMethod_of_Transaction(String method_of_Transaction) {
	this.method_of_Transaction = method_of_Transaction;
}
public int getPrice_of_Product_in_coins() {
	return price_of_Product_in_coins;
}
public void setPrice_of_Product_in_coins(int price_of_Product_in_coins) {
	this.price_of_Product_in_coins = price_of_Product_in_coins;
}
public String getHistoryDetails() {
	return historyDetails;
}
public void setHistoryDetails(String historyDetails) {
	this.historyDetails = historyDetails;
}
public Transaction(int transactionId, String buyerEmail, String sellerEmail,
		String productSend, String productObtained, String method_of_Transaction, int price_of_Product_in_coins,
		String historyDetails) {
	super();
	this.transactionId = transactionId;
		this.buyerEmail = buyerEmail;
	this.sellerEmail = sellerEmail;
	this.productSend = productSend;
	this.productObtained = productObtained;
	this.method_of_Transaction = method_of_Transaction;
	this.price_of_Product_in_coins = price_of_Product_in_coins;
	this.historyDetails = historyDetails;
}
public Transaction() {
	super();
	// TODO Auto-generated constructor stub
}
@Override
public String toString() {
	return "Transaction [transactionId=" + transactionId + ", , buyerEmail=" + buyerEmail + ", sellerEmail=" + sellerEmail + ", productSend="
			+ productSend + ", productObtained=" + productObtained + ", method_of_Transaction=" + method_of_Transaction
			+ ", price_of_Product_in_coins=" + price_of_Product_in_coins + ", historyDetails=" + historyDetails + "]";
}
public Date getDate() {
	return date;
}
public void setDate(Date date) {
	this.date = date;
}



}
