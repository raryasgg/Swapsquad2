package com.stackroute.recommendationservice.repository;

import java.util.List;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import com.stackroute.recommendationservice.model.Category;

@Repository
public interface CategoryRepository extends Neo4jRepository<Category,String> {

}
