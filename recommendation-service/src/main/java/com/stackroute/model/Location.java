package com.stackroute.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Node;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Node
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Location {
	@Id
	 @GeneratedValue
	 private Long id;
	private  String city;
	private String state;
	

}
