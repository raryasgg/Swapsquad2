package com.stackroute.service;

import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.model.Category;
import com.stackroute.model.IncomingProductData;
import com.stackroute.model.Location;
import com.stackroute.model.User;
import com.stackroute.repository.CategoryRepository;
import com.stackroute.repository.LocationRepository;
import com.stackroute.repository.RecommendationRepository;
import com.stackroute.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;




@Slf4j

@Service

public class RecommendationServiceImp implements RecommendationService {
	private RecommendationRepository repo;
    private UserRepository userRepository;
    private CategoryRepository categoryRepository;
    private LocationRepository productRepository;
    @Autowired
    public RecommendationServiceImp(RecommendationRepository recommendationRepository, UserRepository userRepository, CategoryRepository categoryRepository, LocationRepository productRepository) {
        this.repo = recommendationRepository;
        this.userRepository=userRepository;
        this.categoryRepository=categoryRepository;
        this.productRepository=productRepository;
    }
    @Override
    public HashSet<String> getProductRecommendations(String Email) {
        Email = Email.toLowerCase();

        // Max amount of recommendations
        int MAX_COUNT = 5;

        HashSet<String> productRecommendations = new HashSet<>();
        int size = 0;
        log.debug("Fetching recommendations for Email: {}", Email);

        // In case of non-guest user,
        if (Email != null && !Email.equals("")) {
            productRecommendations = this.repo.getProductRecommendations(Email, MAX_COUNT);
            size = productRecommendations.size();
            log.debug("Found {} recommendations", size);
        }
        // In case there are no recommendations, (or if user is a guest user)
        if (size == 0) {
            log.debug("No recommendations found, fetching random recommendations!");
            productRecommendations = this.repo.getAllProducts(MAX_COUNT);
        }
        // In case there are recommendations less than required
        else if (size < MAX_COUNT) {
            log.debug("Found {} recommendations and {} random recommendations", size, MAX_COUNT - size);
            productRecommendations.addAll(this.repo.getAllProducts(size - MAX_COUNT));
        }
        return productRecommendations;
    }
    @Override
	public void addIncomingData(IncomingProductData incomingData) {
		
		  String category = incomingData.getProductCategory().toUpperCase();
	        String productId = incomingData.getProductId();
	        String email = incomingData.getEmail().toLowerCase();
	        this.repo.addData(category, productId, email);
	        log.debug("Added {CATEGORY: {}, PRODUCT_ID: {}, EMAIL: {}} to the database!", category, productId, email);
	    }
    @Override
	public void createNode(IncomingProductData incomingData) {
		String email=incomingData.getEmail.toLowerCase();
        List<User> users=userRepository.findUserByEmail(email);
        if(users.size()==0){
            log.info("Creating user node");
            User user=new User();
            user.setEmail(Email);
            userRepository.save(user);
        } else {
            log.info("User node already exist");
        }
        log.info("call for creating category relation");
        createUCRelation(email, incomingData.getProductCategory().toLowerCase());
        log.info("call for creating product relation");
        createUPRelation(email, incomingData.getProductName().toLowerCase(), incomingData.getProductId());
	
	}
	
	@Override
	public List<Location> getRecommendedProduct(String Email) {
		return productRepository.getRecommendedProducts(Email.toLowerCase());// TODO Auto-generated method stub
		
	}
	@Override
	public List<Category> getRecommendedCategory(String Email) {
		System.out.println("user in service:"+Email);
        List<Category> categoryList= categoryRepository.getRecommendedCategory(Email.toLowerCase());
        return categoryList;
	}

	 public void createUCRelation(String Email, String category){
	        List<Category> categories=categoryRepository.findCategoryByName(category);
	        if (categories.size()==0) {
	            log.info("creating category node");
	            Category categoryNew=new Category();
	            categoryNew.setCategory(category);
	            categoryRepository.save(categoryNew);
	        }
	        if (! userRepository.checkUCRelation(Email, category)){
	            log.info("Creating user category relation");
	            userRepository.createUserCategoryRelationship(Email, category);
	        }
	       
	    }
	 public void createUPRelation(String Email, String productName, String productId){
	        List<Location> products=productRepository.findProductByName(productName);
	        if (products.size()==0) {
	            log.info("creating Product node");
	            Location newProduct=new Location();
	            newProduct.setProductName(productName);
	            newProduct.setProductId(productId);
	            productRepository.save(newProduct);
	        }
	        if (! userRepository.checkUPRelation(Email, productName)){
	            log.info("Creating user product relation");
	            userRepository.createUserProductRelationship(Email, productName);
	        }
//	        System.out.println(userRepository.checkUPRelation(userName, productName));
	    }
	 @Override
		public void deleteProductNode(String productId) {
			this.repo.deleteProductNode(productId);
	        log.debug("Deleted product with id {}", productId);
			
		}
	@Override
	public void deleteLocationNode(String city) {
		// TODO Auto-generated method stub
	
		
	}
	@Override
	public List<Location> getRecommendedLocation(String Email) {
		// TODO Auto-generated method stub
		return null;
	}




}
