package com.stackroute.recommendationservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.recommendationservice.model.CustomMessage;
import com.stackroute.recommendationservice.model.IncomingProductData;
import com.stackroute.recommendationservice.exception.ProductNotFoundException;
import com.stackroute.recommendationservice.model.config.Publisher;
import com.stackroute.recommendationservice.service.RecommendationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
@Slf4j
@RestController
@CrossOrigin("*")
public class RecommendationController {
    private RecommendationService recommendationService;

    @Autowired
    public RecommendationController(RecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }

    @Autowired
    private Publisher publisher;

    @GetMapping("test")
    public String test() {
        return "hello";
    }

    @GetMapping("/recommend/{city}")
    public ResponseEntity<?> getProductRecommendationsByLocation(@PathVariable String city) {
        try {
            HashSet<IncomingProductData> recommendations = this.recommendationService.getProductRecommendationsByLocation(city);
            return new ResponseEntity<>(recommendations, HttpStatus.OK);
        } catch (ProductNotFoundException e) {
            return new ResponseEntity("Product Not Exits", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/recommendCategory")
    public ResponseEntity<?> getProductRecommendationByCityAndCategory(@RequestParam("city") String city, @RequestParam("category") String category) {
        log.debug("City:category" + city + category);
        try {
            HashSet<IncomingProductData> recommendations = this.recommendationService.getProductRecommendationByCityAndCategory(city, category);
            return new ResponseEntity<>(recommendations, HttpStatus.OK);
        } catch (ProductNotFoundException e) {
            return new ResponseEntity("Product Not Exits", HttpStatus.CONFLICT);
        }
    }

    @PostMapping("add")
    public ResponseEntity<?> addIncomingData(@RequestBody IncomingProductData incomingData) {
        log.debug("data:" + incomingData);
        CustomMessage messages = new CustomMessage(incomingData.getProductId(),incomingData.getProductName(),incomingData.getProductCategory(),
                incomingData.getState(),incomingData.getCity(),incomingData.getProductOwnerEmail(),
                incomingData.getProductImage());

        publisher.publishMessage(messages);
        this.recommendationService.createNode(incomingData);
        return new ResponseEntity<>("Added data to neo4j successfully!", HttpStatus.OK);
    }

    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<?> deleteProductNode(@PathVariable int productId) {
        this.recommendationService.deleteProductNode(productId);
        return new ResponseEntity<>("Deleted location node!", HttpStatus.OK);
    }

    @GetMapping("/Product")
    public ResponseEntity<?> getProductByCategory(@RequestParam("category") String category) {
        log.debug("category" + category);
        try {
            HashSet<IncomingProductData> recommendations = this.recommendationService.getProductByCategory(category);
            return new ResponseEntity<>(recommendations, HttpStatus.OK);
        } catch (ProductNotFoundException e) {
            return new ResponseEntity("Product Not Exits", HttpStatus.CONFLICT);
        }
    }
   @GetMapping ("/getAllProduct")
    public ResponseEntity<?> getAllProduct(){
       ArrayList<IncomingProductData> rec= this.recommendationService.getAllProduct();
        return new ResponseEntity<>(rec,HttpStatus.OK);
    }

//    @PostMapping("/update/add")
//    public ResponseEntity<IncomingProductData> Updateproduct(@RequestBody IncomingProductData Data, @RequestParam(value = "file") MultipartFile file) throws JsonMappingException, JsonProcessingException, ProductNotFoundException {
//
//        log.debug("Inside the UserRegistrationController -- Updateproduct methods");
//        return new ResponseEntity<IncomingProductData>(recommendationService.addproduct(str, file), org.springframework.http.HttpStatus.OK);
//
//
//    }
}


