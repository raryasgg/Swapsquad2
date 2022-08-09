package com.stackroute.recommendationservice.repository;

import com.stackroute.recommendationservice.model.Category;
import com.stackroute.recommendationservice.model.IncomingProductData;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.List;

@Repository
public interface ProductDataRepository extends Neo4jRepository<IncomingProductData, Integer>  {
	 @Query("MATCH (n:) {productId: $productId} DELETE DETACH n;")
	 void deleteProductNode(int productId);
        @Query("MATCH (a:IncomingProductData{productId:$productId}),(b:Category{category:$category}) MERGE (a)-[r:category]->(b)")
		public void createCategoryRelationshipWithProduct(int productId,String category);
        @Query("MATCH (a:IncomingProductData{productId:$productId}),(b:Location{city:$city}) MERGE (a)-[r:city]->(b)")
	public void createLocationRelationshipWithProduct(int productId,String city);

	@Query("MATCH (a:IncomingProductData),(b:Location) where (a.city)=$city and (b.city)=$city create (a)-[:from]->(b) return a")
		HashSet<IncomingProductData> getProductRecommendationByLocation(String city);
    @Query ("Match (a:IncomingProductData),(b:Location),(c:Category) where (a.productCategory)=$category and (c.category)=$category and (a.city)=$city and (b.city)=$city create (a)-[:from]->(b) create (a)-[:belongs]->(c) return a")
	HashSet<IncomingProductData> getProductRecommendationByCityAndCategory(String city,String category);
	@Query("Match (a:IncomingProductData),(b:Category) where (a.productCategory)=$category and (b.category)=$category create (a)-[:belongs]->(b) return a")
	HashSet<IncomingProductData> getProductByCategory(String category);
}
