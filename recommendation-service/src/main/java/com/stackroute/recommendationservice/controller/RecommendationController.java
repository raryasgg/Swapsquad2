package com.stackroute.recommendationservice.controller;

import com.stackroute.recommendationservice.model.IncomingProductData;
import com.stackroute.recommendationservice.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;

@RestController
public class RecommendationController {
    private RecommendationService recommendationService;
    @Autowired
    public RecommendationController(RecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }

    @GetMapping("test")
    public String test(){
        return "hello";
    }

    @GetMapping("/recommend/{city}")
    public ResponseEntity<?> getProductRecommendationsByLocation(@PathVariable String city){
        HashSet<IncomingProductData> recommendations = this.recommendationService.getProductRecommendationsByLocation(city);
        return new ResponseEntity<>(recommendations, HttpStatus.OK);
    }
    @GetMapping("/recommendCategory")
    public ResponseEntity<?> getProductRecommendationByCityAndCategory(@RequestParam("city") String city, @RequestParam("category") String category){
        System.out.println("City:category" +city+category);
        HashSet<IncomingProductData> recommendations = this.recommendationService.getProductRecommendationByCityAndCategory(city,category);
        return new ResponseEntity<>(recommendations, HttpStatus.OK);
    }
    @PostMapping("add")
    public ResponseEntity<?> addIncomingData(@RequestBody IncomingProductData incomingData){
        System.out.println("data:"+incomingData);
        this.recommendationService.createNode(incomingData);
        return new ResponseEntity<>("Added data to neo4j successfully!", HttpStatus.OK);
    }
    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<?> deleteProductNode(@PathVariable int productId){
        this.recommendationService.deleteProductNode(productId);
        return new ResponseEntity<>("Deleted location node!", HttpStatus.OK);
    }
   @GetMapping("/Product")
    public  ResponseEntity<?> getProductByCategory(@RequestParam("category") String category){
       System.out.println("category" +category);
       HashSet<IncomingProductData> recommendations= this.recommendationService.getProductByCategory(category);
       return new ResponseEntity<>(recommendations, HttpStatus.OK);
   }
}
