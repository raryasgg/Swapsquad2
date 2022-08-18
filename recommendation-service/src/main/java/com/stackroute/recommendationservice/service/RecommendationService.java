package com.stackroute.recommendationservice.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.stackroute.recommendationservice.exception.ProductNotFoundException;
import com.stackroute.recommendationservice.model.IncomingProductData;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;

public interface RecommendationService {
    void deleteProductNode(int productId);
    void createNode(IncomingProductData incomingData);
    HashSet<IncomingProductData> getProductRecommendationsByLocation(String city)throws ProductNotFoundException;
    HashSet<IncomingProductData> getProductRecommendationByCityAndCategory(String city,String category)throws ProductNotFoundException;
    HashSet<IncomingProductData> getProductByCategory(String category)throws ProductNotFoundException;
    ArrayList<IncomingProductData> getAllProduct();
    void createImageNode(IncomingProductData Data, MultipartFile file) throws ProductNotFoundException, IOException;
//    IncomingProductData addproduct(String str, MultipartFile file) throws JsonProcessingException, ProductNotFoundException;
}
