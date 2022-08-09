package com.stackroute.recommendationservice.service;

import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.stackroute.recommendationservice.model.Category;
import com.stackroute.recommendationservice.model.IncomingProductData;
import com.stackroute.recommendationservice.model.Location;
import com.stackroute.recommendationservice.repository.CategoryRepository;
import com.stackroute.recommendationservice.repository.LocationRepository;
import com.stackroute.recommendationservice.repository.ProductDataRepository;
import com.stackroute.recommendationservice.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;




@Slf4j

@Service

public class RecommendationServiceImp implements RecommendationService {
	private ProductDataRepository repo;
    private UserRepository userRepository;
    private CategoryRepository categoryRepository;
    private LocationRepository locationRepository;
    @Autowired
    public RecommendationServiceImp(ProductDataRepository recommendationRepository, UserRepository userRepository, CategoryRepository categoryRepository, LocationRepository locationRepository) {
        this.repo = recommendationRepository;
        this.userRepository=userRepository;
        this.categoryRepository=categoryRepository;
        this.locationRepository=locationRepository;
    }
    @Override
    public void deleteProductNode(int productId) {
        IncomingProductData data=repo.findById(productId).get();
      repo.delete(data);
    }
    @Override
	public void createNode(IncomingProductData incomingData) {

        if (repo.findById(incomingData.getProductId()).isEmpty()) {
            repo.save(incomingData);
        }
        if (categoryRepository.findById(incomingData.getProductCategory()).isEmpty()) {
            Category category1 = new Category(incomingData.getProductCategory());
            categoryRepository.save(category1);
        }
        if (locationRepository.findById(incomingData.getCity()).isEmpty()) {
            Location location1 = new Location(incomingData.getCity(), incomingData.getState());
            locationRepository.save(location1);
        }
        repo.createCategoryRelationshipWithProduct(incomingData.getProductId(),incomingData.getProductCategory());
        repo.createLocationRelationshipWithProduct(incomingData.getProductId(),incomingData.getCity());
    }

    @Override
    public List<Category> getCategoryByProductIdAndCity(int productId, String city) {
        List<Category> catdata=repo.getCategoryByProductIdAndCity(productId,city);
        return catdata;
    }

    @Override
	public List<Category> getRecommendedCategory(String category) {
		System.out.println("category in service:"+category);
        List<Category> categoryList= categoryRepository.findAll();
        return categoryList;
	}

    @Override
    public HashSet<String> getProductRecommendationsByLocation(String city) {
        HashSet<String> prod=repo.getProductRecommendationByLocation(city);
        return prod;
    }
}





