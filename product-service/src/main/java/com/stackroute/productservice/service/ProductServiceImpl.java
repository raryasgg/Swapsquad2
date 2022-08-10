package com.stackroute.productservice.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.exception.ProductNotFoundException;


import com.stackroute.productservice.model.Product;
import com.stackroute.productservice.model.Status;
import com.stackroute.productservice.reprository.ProductRepository;


@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository repo;

    
    
    public Product addProd(Product product) throws ProductAlreadyExistException {
    	Optional<Product> prod = repo.findById(product.getPid());
		if (prod.isPresent()) {
			throw new ProductAlreadyExistException();
		} else {
			return repo.save(product);
		}
    }
    
    public Product getById(int id) throws ProductNotFoundException {
    	Optional<Product> pro = repo.findById(id);
		if (pro.isPresent()) {
			return pro.get();
		} else {
			throw new ProductNotFoundException();
		}
    }
    
    public List<Product> getAllUserAvailable(){
		return repo.findAllByPstatus("AVAILABLE");
	}

    public Product setstatus(String abc){
    	Product ab = repo.findByPname(abc);
    	Status z = Status.NOTAVAILABLE;
    	ab.setPstatus(z);
		return ab;
	}
    
    
	
}
