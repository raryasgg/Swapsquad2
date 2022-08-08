package com.stackroute.repository;

import java.util.List;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import com.stackroute.model.Category;

@Repository
public interface CategoryRepository extends Neo4jRepository<Category, Long> {
	  @Query("MATCH(c:Category {category:$name}) RETURN c")
	    List<Category> findCategoryByName(String name);

	    @Query("MATCH(u:User {Email:$Email})-[l:location]->(c: Category) RETURN c")
	    List<Category> getRecommendedCategory(String Email);

}
