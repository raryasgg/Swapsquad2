package com.stackroute.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.model.Category;
import com.stackroute.model.IncomingProductData;
import com.stackroute.model.Location;
import com.stackroute.service.RecommendationService;

import java.util.HashSet;
import java.util.List;
@RestController
@CrossOrigin(value="*")

public class RecommendationController {
	private RecommendationService recommendationService;
	 @Autowired
	    public RecommendationController(RecommendationService recommendationService) {
	        this.recommendationService = recommendationService;
	    }
	 @PostMapping("/recommend")
	    public ResponseEntity<?> getRecommendations(@RequestBody String Email){
	        HashSet<String> recommendations = this.recommendationService.getProductRecommendations(Email);
	        return new ResponseEntity<>(recommendations, HttpStatus.OK);
	    }
	 @GetMapping("/recommendCategory")
	    public ResponseEntity<?> getRecommendedCategory(@RequestParam String Email){
	        System.out.println("Email:"+Email);
	        List<Category> recommendations = this.recommendationService.getRecommendedCategory(Email);
	        return new ResponseEntity<>(recommendations, HttpStatus.OK);
	    }
	 @GetMapping("/recommendProduct")
	    public ResponseEntity<?> getRecommendedProduct(@RequestParam String Email){
	        System.out.println("Email:"+Email);
	        List<Location> recommendations = this.recommendationService.getRecommendedProduct(Email);
	        return new ResponseEntity<>(recommendations, HttpStatus.OK);
	    }
	 @PostMapping("/add")
	    public ResponseEntity<?> addIncomingData(@RequestBody IncomingProductData incomingData){
	        System.out.println("data:"+incomingData);
	        this.recommendationService.createNode(incomingData);
	        return new ResponseEntity<>("Added data to neo4j successfully!", HttpStatus.OK);
	    }
	 @PostMapping("/delete/{productId}")
	    public ResponseEntity<?> deleteProductNode(@PathVariable String productId){
	        this.recommendationService.deleteProductNode(productId);
	        return new ResponseEntity<>("Deleted product node!", HttpStatus.OK);
	    }



	 





}
