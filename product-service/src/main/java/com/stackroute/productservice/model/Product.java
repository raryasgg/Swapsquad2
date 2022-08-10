package com.stackroute.productservice.model;

import java.util.Date;
import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonEnumDefaultValue;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Transient;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="product")
public class Product {
    
	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int pid;
	private String pemail;
	private String pname;
	private String pcategory;
	private String plocation;
	@JsonEnumDefaultValue
	private Status pstatus = Status.AVAILABLE;
	@Temporal(TemporalType.TIMESTAMP)
	private Date pdate = new Date(System.currentTimeMillis());
	private List<String[]> pexchange;
	private double pcoin;
	private Exchange pexchangetype;
	private String desc;
	private List<byte[]> image;
	public Product(int pid, String pemail, String pname, String plocation, String desc) {
		super();
		this.pid = pid;
		this.pemail = pemail;
		this.pname = pname;
		this.plocation = plocation;
		this.desc = desc;
	}
	
	
}
