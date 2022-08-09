package com.stackroute.userservice.controller;

import java.util.List;

import org.apache.commons.httpclient.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.stackroute.userservice.model.UserRegistration;
import com.stackroute.userservice.repo.UserRepo;
import com.stackroute.userservice.service.UserAlreadyExistException;
import com.stackroute.userservice.service.UserNotFoundException;
import com.stackroute.userservice.service.UserRegistrationService;



	@RestController
@RequestMapping("/users")
	//@CrossOrigin(origins="http://localhost:4200")
	public class UserRegistrationController {
		
 
		
		@Autowired
		private UserRegistrationService userservice;
		
		@PostMapping("/user")
		public ResponseEntity<UserRegistration> registerUser(@RequestBody UserRegistration user) {
		
		try {
			return new ResponseEntity<UserRegistration>(userservice.addNew(user),org.springframework.http.HttpStatus.CREATED);
		} catch (UserAlreadyExistException e) {
			// TODO Auto-generated catch block
			return new ResponseEntity("User already Exist", org.springframework.http.HttpStatus.CONFLICT);
		} 
			}
		@PutMapping("/update")
		public ResponseEntity<UserRegistration> updateRegistration(@RequestBody UserRegistration user){
			UserRegistration employeeSaved = userservice.update(user);
			return new ResponseEntity<UserRegistration>(employeeSaved,org.springframework.http.HttpStatus.OK);
		}
	
			
	@GetMapping("/user/{email}")
		public ResponseEntity<UserRegistration> getUserRegistrationById(@PathVariable String email){
			try {
				return new ResponseEntity<UserRegistration>(userservice.getById(email),org.springframework.http.HttpStatus.OK);
			} catch (UserNotFoundException e) {
				// TODO Auto-generated catch block
				return new ResponseEntity("User Not found", org.springframework.http.HttpStatus.NOT_FOUND);
			}
		}
	
	@DeleteMapping("/delete/{email}")
	public ResponseEntity<Void> deleteEmpById(@PathVariable("email") String email){
		
		userservice.deleteEmailById(email);
		return new ResponseEntity<Void>(org.springframework.http.HttpStatus.ACCEPTED);
	}
	
	}
	   
		 

