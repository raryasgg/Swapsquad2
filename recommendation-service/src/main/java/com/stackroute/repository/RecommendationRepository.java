package com.stackroute.repository;

import java.util.HashSet;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import com.stackroute.model.IncomingProductData;
@Repository
public interface RecommendationRepository extends Neo4jRepository<IncomingProductData, Integer>  {
	 @Query("MATCH (n: location) {city: $city} DELETE DETACH n;")
	    void deleteLocationNode(String city);

	    @Query(
	            "MERGE (c: Category {name: $category})" +
	            "MERGE (l: Location {city: $city, category: $category})" +
	            "MERGE (u: User {name: $Email})" +
	            "MERGE (u) -[:LOCATION_PRODUCT]-> (l)" +
	            "MERGE (u) -[:LOCATION_CATEGORY]-> (c)" +
	            "MERGE (l) -[:BELONGS_TO]-> (c)"
	    )
	    void addData(String category, String city, String Email);
	    @Query(
	            "MATCH (o:User {name: $Email}) -[:LOCATION_CATEGORY]-> (c: Category) " +
	            "MATCH (x:User) -[:LOCATION_CATEGORY]-> (c) " +
	            "MATCH (l: Location {category: c.name}) <-[:LOCATION_PRODUCT] - (x:User) " +
	            "WHERE NOT EXISTS((o)-[:LOCATION_PRODUCT]->(l)) " +
	            "RETURN l.city LIMIT $limit"
	    )
	    HashSet<String> getLocationRecommendations(String Email, int limit);

	    @Query(
	            "MATCH (l: location) RETURN l.city LIMIT $limit;"
	    )
	    HashSet<String> getAllLoctions(int limit);



}
