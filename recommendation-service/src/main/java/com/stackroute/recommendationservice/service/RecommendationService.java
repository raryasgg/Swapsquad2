package com.stackroute.recommendationservice.service;

import java.util.HashSet;
import java.util.List;

import com.stackroute.recommendationservice.model.Category;
import com.stackroute.recommendationservice.model.IncomingProductData;
import com.stackroute.recommendationservice.model.Location;

public interface RecommendationService {
//	HashSet<String> getLocationRecommendations(String city);
//    void addIncomingData(IncomingProductData incomingData);
    void deleteProductNode(int productId);

    void createNode(IncomingProductData incomingData);

    public List<Category> getCategoryByProductIdAndCity(int productId,String city);
    List<Category> getRecommendedCategory(String category);
    HashSet<String> getProductRecommendationsByLocation(String city);

}
