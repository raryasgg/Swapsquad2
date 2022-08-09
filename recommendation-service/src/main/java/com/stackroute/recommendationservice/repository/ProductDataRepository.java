package com.stackroute.recommendationservice.repository;

import java.util.HashSet;
import java.util.List;

import com.stackroute.recommendationservice.model.Category;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import com.stackroute.recommendationservice.model.IncomingProductData;
@Repository
public interface ProductDataRepository extends Neo4jRepository<IncomingProductData, Integer>  {
	 @Query("MATCH (n:) {productId: $productId} DELETE DETACH n;")
	 void deleteProductNode(int productId);
	@Query("MATCH(l:Location {city:$city}) RETURN c")
		List<Category> getRecommendedCategory(String city);
	    @Query( "MATCH (l: location) RETURN l.city LIMIT $limit;")
	    HashSet<String> getAllLoctions(int limit);

        @Query("MATCH (a:IncomingProductData{productId:$productId}),(b:Category{category:$category}) MERGE (a)-[r:category]->(b)")
		public void createCategoryRelationshipWithProduct(int productId,String category);
        @Query("MATCH (a:IncomingProductData{productId:$productId}),(b:Location{city:$city}) MERGE (a)-[r:city]->(b)")
	public void createLocationRelationshipWithProduct(int productId,String city);

	@Query("MATCH (a:IncomingProductData),(b:Location)  WHERE(a.city)=$city and  (b.city)=$city CREATE (a)-[r:from]->(b) RETURN a")
		HashSet<String> getProductRecommendationByLocation(String city);

	List<Category> getCategoryByProductIdAndCity(int productId, String city);
}
