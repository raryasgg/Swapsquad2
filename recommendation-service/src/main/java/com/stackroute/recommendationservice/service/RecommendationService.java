package com.stackroute.recommendationservice.service;

import com.stackroute.recommendationservice.model.Category;
import com.stackroute.recommendationservice.model.IncomingProductData;

import java.util.HashSet;
import java.util.List;

public interface RecommendationService {
    void deleteProductNode(int productId);
    void createNode(IncomingProductData incomingData);
    HashSet<IncomingProductData> getProductRecommendationsByLocation(String city);
    HashSet<IncomingProductData> getProductRecommendationByCityAndCategory(String city,String category);
    HashSet<IncomingProductData> getProductByCategory(String category);
}
