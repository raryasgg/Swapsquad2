package com.stackroute.recommendationservice.model;

import org.neo4j.ogm.annotation.NodeEntity;
import org.springframework.data.annotation.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NodeEntity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Category {
	@Id
	private String category;

}
