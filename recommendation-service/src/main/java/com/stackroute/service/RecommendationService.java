package com.stackroute.service;

import java.util.HashSet;
import java.util.List;

import com.stackroute.model.Category;
import com.stackroute.model.IncomingProductData;
import com.stackroute.model.Location;

public interface RecommendationService {
	HashSet<String> getProductRecommendations(String Email);
    void addIncomingData(IncomingProductData incomingData);
    void deleteLocationNode(String city);

    void createNode(IncomingProductData incomingData);

    List<Location> getRecommendedLocation(String Email);

    List<Category> getRecommendedCategory(String Email);

}
