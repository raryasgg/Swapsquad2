package com.stackroute.recommendationservice.repository;


import com.stackroute.recommendationservice.model.Location;
import org.apache.catalina.Store;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.neo4j.core.Neo4jOperations;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ProductDataRepositoryTest {
    @Autowired
    private ProductDataRepository productDataRepository;
    private Location location;
    

   // @Test
//    void getProductRecommendationByLocation() {
//     Location location=new Location("Raebareli","UP");
//     Location addedlocation=location.;
//     assertEquals(location.getCity(),addedlocation.getCity());
//    }

  //  @Test
  //  void getProductRecommendationByCityAndCategory() {
  //  }

  //  @Test
   // void getProductByCategory() {
   // }
}