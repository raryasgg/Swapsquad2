package com.stackroute.recommendationservice.controller;

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

import com.stackroute.recommendationservice.model.Category;
import com.stackroute.recommendationservice.model.IncomingProductData;
import com.stackroute.recommendationservice.service.RecommendationService;

import java.util.HashSet;
import java.util.List;
@RestController
@CrossOrigin(value="*")

public class RecommendationController {
	@Autowired
	private RecommendationService recommendationService;
	    public RecommendationController(RecommendationService recommendationService) {
	        this.recommendationService = recommendationService;
	    }
	 @GetMapping("/recommend/{city}")
	    public ResponseEntity<?> getProductRecommendationsByLocation(@PathVariable String city){
	        HashSet<String> recommendations = this.recommendationService.getProductRecommendationsByLocation(city);
	        return new ResponseEntity<>(recommendations, HttpStatus.OK);
	    }
	 @GetMapping("/recommendCategory")
	    public ResponseEntity<?> getCategoryByProductIdAndCity(@RequestParam("productId") int productId,@RequestParam("city") String city){
	        System.out.println("productId,City:"+productId+city);
	        List<Category> recommendations = this.recommendationService.getCategoryByProductIdAndCity(productId,city);
	        return new ResponseEntity<>(recommendations, HttpStatus.OK);
	    }
	 @PostMapping("/add")
	    public ResponseEntity<?> addIncomingData(@RequestBody IncomingProductData incomingData){
	        System.out.println("data:"+incomingData);
	        this.recommendationService.createNode(incomingData);
	        return new ResponseEntity<>("Added data to neo4j successfully!", HttpStatus.OK);
	    }
	 @PostMapping("/delete/{productId}")
	    public ResponseEntity<?> deleteProductNode(@PathVariable int productId){
	        this.recommendationService.deleteProductNode(productId);
	        return new ResponseEntity<>("Deleted location node!", HttpStatus.OK);
	    }

 @GetMapping("/Test")
	public String Test(){
		 return "hello";
 }

	 





}
