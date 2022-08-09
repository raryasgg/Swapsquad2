package com.stackroute.recommendationservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.neo4j.core.schema.Node;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Node
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Location {
	@Id
	private  String city;
	private String state;
	

}
