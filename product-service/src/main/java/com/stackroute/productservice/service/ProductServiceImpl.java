package com.stackroute.productservice.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.productservice.exception.NoProductAvailableInTheRepository;
import com.stackroute.productservice.exception.NoProductExistsInTheRepository;
import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.exception.ProductNotFoundException;
import com.stackroute.productservice.exception.ProductNotFoundInRepository;
import com.stackroute.productservice.exception.ProvideProperProductDetails;
import com.stackroute.productservice.model.Product;
import com.stackroute.productservice.model.Status;
import com.stackroute.productservice.reprository.ProductRepository;
import com.stackroute.productservice.service.SequenceGeneratorService;



@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository repo;
    
    @Autowired
	private SequenceGeneratorService sequenceGeneratorService;

    public List<Product> findallrepository() throws NoProductExistsInTheRepository {
    	if(repo.findAll().isEmpty()) {
    		throw new NoProductExistsInTheRepository();
    	} else {
    		return repo.findAll();
    	}
    	
    	
    }
    
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
    
    public List<Product> getByEmail(String id) throws ProductNotFoundException {
    	if(repo.findAllByPemail(id).isEmpty()) {
    		throw new ProductNotFoundException();
    	} else {
    		return repo.findAllByPemail(id);
    	}
    }
    
//    public List<Product> getAllUserAvailable(){
//		return repo.findAllByPstatus("AVAILABLE");
//	}
    
    public List<Product> getAllUserAvailable() throws NoProductAvailableInTheRepository{
    	if(repo.findAllByPstatus("AVAILABLE").isEmpty()) {
    		throw new NoProductAvailableInTheRepository();
    	} else {
    		return repo.findAllByPstatus("AVAILABLE");
    	}
		
	}

    
    public Product setstatus(int id) throws NoProductExistsInTheRepository{
    	Optional<Product> prod = repo.findById(id);
    	if (prod.isEmpty()) {
			throw new NoProductExistsInTheRepository();
		} else {
			Status z = Status.NOTAVAILABLE;
	    	Product as = prod.get();
	    	as.setPstatus(z);
	    	Product savedprod = repo.save(as);
			return savedprod;
		}
    }

    public Product setstatus(String abc){
    	Product ab = repo.findByPname(abc);
    	Status z = Status.NOTAVAILABLE;
    	ab.setPstatus(z);
		return ab;

	}
    
//    public Product update(Product prod) {
//    	Product savedprod = repo.save(prod);
//		return savedprod;
//	}
    
    public Product update(Product prod) throws ProductNotFoundInRepository {
    	int id = prod.getPid();
    	if(repo.findById(id).isEmpty()) {
    		throw new ProductNotFoundInRepository();
    	} else {
    		Product savedprod = repo.save(prod);
    		return savedprod;
    	}
    	
	}
    
    public Product addprod(String str,MultipartFile[] file) throws ProvideProperProductDetails, JsonMappingException, JsonProcessingException {
    	if(str.isEmpty()) {
    		throw new ProvideProperProductDetails();
    	} else {
    		ObjectMapper objectMapper = new ObjectMapper();
    		Product prod = objectMapper.readValue(str,Product.class);
    		prod.setPid(sequenceGeneratorService.generateSequence(Product.SEQUENCE_NAME));
    		List<byte[]> imagelist = new ArrayList<>();
    		Arrays.asList(file).stream().forEach(files -> {
    		   try {
    		      byte[] bytes = files.getBytes();
    		      imagelist.add(bytes);
    		   } catch (IOException e) {
    		   }
    		});
    		prod.setImage(imagelist);
    		repo.save(prod);
    		return prod;
    	}
    	
    	
    	
	}

	
	
}
