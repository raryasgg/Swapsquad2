package com.stackroute.userservice.controller;

import java.util.List;

import org.apache.commons.httpclient.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.stackroute.userservice.model.UserRegistration;

import com.stackroute.userservice.service.UserAlreadyExistException;
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
		
		
		/* @GetMapping("/user")
		 public ResponseEntity<List<UserRegistration>> getStudent() {
			 return ResponseEntity.ok(this.u.findAll());
			*/
			
	
		 }
}
