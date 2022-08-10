package com.stackroute.recommendationservice.service;

import com.stackroute.recommendationservice.exception.ProductNotFoundException;
import com.stackroute.recommendationservice.model.IncomingProductData;

import java.util.HashSet;

public interface RecommendationService {
    void deleteProductNode(int productId);
    void createNode(IncomingProductData incomingData);
    HashSet<IncomingProductData> getProductRecommendationsByLocation(String city)throws ProductNotFoundException;
    HashSet<IncomingProductData> getProductRecommendationByCityAndCategory(String city,String category)throws ProductNotFoundException;
    HashSet<IncomingProductData> getProductByCategory(String category)throws ProductNotFoundException;
}
