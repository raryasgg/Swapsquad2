package com.stackroute.recommendationservice.controller;

import com.stackroute.recommendationservice.model.IncomingProductData;
import com.stackroute.recommendationservice.exception.ProductNotFoundException;
import com.stackroute.recommendationservice.service.RecommendationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
@Slf4j
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
        try{
            HashSet<IncomingProductData> recommendations = this.recommendationService.getProductRecommendationsByLocation(city);
            return new ResponseEntity<>(recommendations, HttpStatus.OK);
        }
        catch (ProductNotFoundException e){
            return new ResponseEntity("Product Not Exits",HttpStatus.CONFLICT);
        }
    }
    @GetMapping("/recommendCategory")
    public ResponseEntity<?> getProductRecommendationByCityAndCategory(@RequestParam("city") String city, @RequestParam("category") String category){
        log.debug("City:category" +city+category);
        try {
            HashSet<IncomingProductData> recommendations = this.recommendationService.getProductRecommendationByCityAndCategory(city, category);
            return new ResponseEntity<>(recommendations, HttpStatus.OK);
        }
        catch (ProductNotFoundException e){
            return new ResponseEntity("Product Not Exits",HttpStatus.CONFLICT);
        }
    }
    @PostMapping("add")
    public ResponseEntity<?> addIncomingData(@RequestBody IncomingProductData incomingData){
        log.debug("data:"+incomingData);
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
       log.debug("category" +category);
       try{
       HashSet<IncomingProductData> recommendations= this.recommendationService.getProductByCategory(category);
       return new ResponseEntity<>(recommendations, HttpStatus.OK);
   }
       catch (ProductNotFoundException e)
       {
           return new ResponseEntity("Product Not Exits",HttpStatus.CONFLICT);
       }
   }
}
