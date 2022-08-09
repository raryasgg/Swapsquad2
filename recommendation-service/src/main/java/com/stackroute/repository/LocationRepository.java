package com.stackroute.repository;

import java.util.List;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import com.stackroute.model.Location;
@Repository
public interface LocationRepository extends Neo4jRepository<Location, Long>  {
	@Query("MATCH(l:Location {loctionName:$loction}) RETURN l")
    List<Location> findLoctionByName(String location);

    @Query("MATCH(u1:User {Email:$Email})-[:locationProduct]->(:Location)<-[:locationProduct]-(u2:User)-[:locationProduct]->(l:Location) return l")
    List<Location> getRecommendedLocations(String Email);

}
