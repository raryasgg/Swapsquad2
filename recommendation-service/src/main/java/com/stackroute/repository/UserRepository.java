package com.stackroute.repository;

import java.util.List;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import com.stackroute.model.User;

@Repository
public interface UserRepository  extends Neo4jRepository<User, Long> {
	  @Query("MATCH(u:User {Email:$Email;}) RETURN u")
	    List<User> findUserByEmail(String Email);

	    @Query("MATCH(u:User {Email:$Email}),(c:Category {category:$category}) CREATE(u)-[:location]->(c)")
	    void createUserCategoryRelationship(String Email, String category);

	    @Query("MATCH(u:User {Email:$Email}),(l:Location {city:$city}) CREATE(u)-[:locationProduct]->(l)")
	    void createUserProductRelationship(String Email, String city);

	    @Query("MATCH(u:User {Email:$Email}),(c:Category {category:$category}) RETURN EXISTS((u)-[:location]-(c))")
	    Boolean checkUCRelation(String Email, String category);

	    @Query("MATCH(u:User {Email:$Email}),(c:Location {city:$city}) RETURN EXISTS((u)-[:locationProduct]-(c))")
	    Boolean checkUPRelation(String Email, String location);


}
