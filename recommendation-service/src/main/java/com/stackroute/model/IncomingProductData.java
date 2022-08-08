package com.stackroute.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.neo4j.core.schema.Node;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Node
@Data
@NoArgsConstructor
@AllArgsConstructor

public class IncomingProductData {
	@Id 
	private Integer productId;
	private String productOwnerEmail;
	private String productName;
	private String state;
	private String city;
	private String productCategory;
	private Byte productImage;
	
	}


