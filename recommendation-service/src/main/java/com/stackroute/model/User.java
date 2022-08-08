package com.stackroute.model;

import org.neo4j.ogm.annotation.NodeEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
@NodeEntity
@NoArgsConstructor
@AllArgsConstructor
@Data

public class User {
	@Id
	 @GeneratedValue
	 private Long id;
	private String Email;


}
