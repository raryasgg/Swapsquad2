package com.stackroute.productservice.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.exception.ProductNotFoundException;
import com.stackroute.productservice.model.Product;

import com.stackroute.productservice.reprository.ProductRepository;

import com.stackroute.productservice.service.ProductService;
import com.stackroute.productservice.service.SequenceGeneratorService;

@RestController
@RequestMapping("/api/v1")
public class ProductController {
	
	@Autowired
	private ProductRepository prepository;
	
	@Autowired
	private ProductService pservice;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	@GetMapping("/product")
	public List<Product> getAllUser(){
		return prepository.findAll();
	}
	
	@PostMapping("/product")
	public ResponseEntity<Product> createproduct(@RequestBody Product product) throws IOException {
		try {
			product.setPid(sequenceGeneratorService.generateSequence(Product.SEQUENCE_NAME));
			return new ResponseEntity<Product>(pservice.addProd(product), HttpStatus.CREATED);
		} catch (ProductAlreadyExistException e) {
			// TODO Auto-generated catch block
			return new ResponseEntity("Product already Exist", HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable int id) {
		try {
			return new ResponseEntity<Product>(pservice.getById(id), HttpStatus.OK);
		} catch (ProductNotFoundException e) {
			// TODO Auto-generated catch block
			return new ResponseEntity("Product Not found", HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/product/a")
	public List<Product> getProductByStatus() {
		return pservice.getAllUserAvailable();
	}
	
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getsetProductById(@PathVariable String name) {
		return new ResponseEntity<Product>(pservice.setstatus(name), HttpStatus.OK);
	}
	
	@PostMapping("/product/add")
	public Product createproducts(@RequestParam(value="str") String str, @RequestParam(value="file") MultipartFile file) throws IOException  {
		ObjectMapper objectMapper = new ObjectMapper();
		Product prod = objectMapper.readValue(str,Product.class);
		prod.setPid(sequenceGeneratorService.generateSequence(Product.SEQUENCE_NAME));
		prod.setImage(file.getBytes());
		
		prepository.save(prod);
		return prod;
		
	}

}
