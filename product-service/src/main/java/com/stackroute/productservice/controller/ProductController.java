package com.stackroute.productservice.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;

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

import com.stackroute.productservice.reprository.ProductRepository;

import com.stackroute.productservice.service.ProductService;
import com.stackroute.productservice.service.ProductServiceImpl;
import com.stackroute.productservice.service.SequenceGeneratorService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ProductController {
	
	@Autowired
	private ProductRepository prepository;
	
	@Autowired
	private ProductServiceImpl pservice;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;


    @GetMapping("/product")
	public ResponseEntity<List<Product>> getAllProducts(){
		try {
			return new ResponseEntity<List<Product>>(pservice.findallrepository(), HttpStatus.CREATED); 
		} catch (NoProductExistsInTheRepository e) {
			// TODO Auto-generated catch block
			return new ResponseEntity("List not found", HttpStatus.CONFLICT);
		}
	}
	
	@PostMapping("/product")
	public ResponseEntity<Product> createproduct(@RequestBody Product product) throws IOException {
		try {
			
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
	
	
	@GetMapping("/producte/{id}")
	public ResponseEntity<List<Product>> getProductByEmail(@PathVariable String id) {
		try {
			return new ResponseEntity<List<Product>>(pservice.getByEmail(id), HttpStatus.OK);
		} catch (ProductNotFoundException e) {
			// TODO Auto-generated catch block
			return new ResponseEntity("Product Not found", HttpStatus.NOT_FOUND);
		}
	}
	
//	@GetMapping("/product/a")
//	public List<Product> getProductByStatus() {
//		return pservice.getAllUserAvailable();
//	}
	
	@GetMapping("/product/a")
	public ResponseEntity<List<Product>> getProductByStatus() {
		try {
			return new ResponseEntity<List<Product>>(pservice.getAllUserAvailable() , HttpStatus.FOUND);
		} catch (NoProductAvailableInTheRepository e) {
			// TODO Auto-generated catch block
			return new ResponseEntity("List not found", HttpStatus.CONFLICT);
		}
	}
	
	
	
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getsetProductById(@PathVariable int id) {
		try {
			return new ResponseEntity<Product>(pservice.setstatus(id), HttpStatus.OK);
		} catch (NoProductExistsInTheRepository e) {
			// TODO Auto-generated catch block
			return new ResponseEntity("product is not there in repository", HttpStatus.NOT_FOUND);
		}
	}
	

//	@PutMapping("/update")
//	public ResponseEntity<Product> updateProduct(@RequestBody Product prod){
//		Product prodSaved = pservice.update(prod);
//		return new ResponseEntity<Product>(prodSaved,org.springframework.http.HttpStatus.OK);
//	}
	
	@PutMapping("/update")
	public ResponseEntity<Product> updateProducts(@RequestBody Product prod){
		Product prodSaved;
		try {
			prodSaved = pservice.update(prod);
			return new ResponseEntity<Product>(prodSaved, HttpStatus.OK);
		} catch (ProductNotFoundInRepository e) {
			// TODO Auto-generated catch block
			return new ResponseEntity("Product is not there so cant be updated",HttpStatus.BAD_GATEWAY);
		}
	}	

//	@PostMapping("/product/add")
//	public Product createproducts(@RequestParam(value="str") String str, @RequestParam(value="file") MultipartFile file) throws IOException  {
//		ObjectMapper objectMapper = new ObjectMapper();
//		Product prod = objectMapper.readValue(str,Product.class);
//		prod.setPid(sequenceGeneratorService.generateSequence(Product.SEQUENCE_NAME));
//		prod.setImage(file.getBytes());
//
//		prepository.save(prod);
//		return prod;
//
//
//	}
	
//	@PostMapping("/product/add")
//	public Product createproducts(@RequestParam(value="str") String str, @RequestParam(value="file") MultipartFile[] file) throws IOException  {
//		ObjectMapper objectMapper = new ObjectMapper();
//		Product prod = objectMapper.readValue(str,Product.class);
//		prod.setPid(sequenceGeneratorService.generateSequence(Product.SEQUENCE_NAME));
//		List<byte[]> imagelist = new ArrayList<>();
//		Arrays.asList(file).stream().forEach(files -> {
//		   try {
//		      byte[] bytes = files.getBytes();
//		      imagelist.add(bytes);
//		   } catch (IOException e) {
//		   }
//		});
//		prod.setImage(imagelist);
//		prepository.save(prod);
//		return prod;
//		
//	}
	
	@PostMapping("/product/add")
	public ResponseEntity<Product> createproduct(@RequestParam(value="str") String str, @RequestParam(value="file") MultipartFile[] file) throws IOException  {
		try {
			return new ResponseEntity<Product>(pservice.addprod(str,file),org.springframework.http.HttpStatus.OK);
//		} catch (JsonMappingException e) {
//			// TODO Auto-generated catch block
//			return new ResponseEntity("Json Mapping Exception",org.springframework.http.HttpStatus.OK);
//		} catch (JsonProcessingException e) {
//			return new ResponseEntity("Json Processing Exception",org.springframework.http.HttpStatus.OK);
		} catch (ProvideProperProductDetails e) {
			return new ResponseEntity("Provice proper details",org.springframework.http.HttpStatus.OK);
		}
		
	}
	
	

}
