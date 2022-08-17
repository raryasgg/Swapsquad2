package com.stackroute.userservice.controller;



import org.apache.commons.httpclient.HttpStatus;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.stackroute.userservice.UserServiceApplication;
import com.stackroute.userservice.model.CustomMessage;
import com.stackroute.userservice.model.UserRating;
import com.stackroute.userservice.model.UserRegistration;
import com.stackroute.userservice.model.config.MQConfig;
import com.stackroute.userservice.model.config.Publisher;
import com.stackroute.userservice.repo.UserRepo;
import com.stackroute.userservice.service.UserAlreadyExistException;
import com.stackroute.userservice.service.UserNotFoundException;

import com.stackroute.userservice.service.UserRegistrationService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:4200")
@Slf4j
public class UserRegistrationController {

	
	@Autowired
	private UserRegistrationService userservice;

	@Autowired
	private Publisher publisher;
	

	@PostMapping("/user")
	public ResponseEntity<UserRegistration> registerUser(@RequestBody UserRegistration user) {

		try {
			log.debug("registerUser");
			CustomMessage messages = new CustomMessage(user.getEmail(), user.getPassword());

			publisher.publishMessage(messages);

			return new ResponseEntity<UserRegistration>(userservice.addNew(user),
					org.springframework.http.HttpStatus.CREATED);
		} catch (UserAlreadyExistException e) {
			// TODO Auto-generated catch block
			log.error("(UserAlreadyExist",e);
			return new ResponseEntity("User already Exist", org.springframework.http.HttpStatus.CONFLICT);
		}
	}

	@PutMapping("/update")
	public ResponseEntity<UserRegistration> updateRegistration(@RequestBody UserRegistration user) {
		UserRegistration employeeSaved = userservice.update(user);
		return new ResponseEntity<UserRegistration>(employeeSaved, org.springframework.http.HttpStatus.OK);
	}

	@GetMapping("/user/{email}")
	public ResponseEntity<UserRegistration> getUserRegistrationById(@PathVariable String email) {
		try {
			return new ResponseEntity<UserRegistration>(userservice.getById(email),
					org.springframework.http.HttpStatus.OK);
		} catch (UserNotFoundException e) {
			// TODO Auto-generated catch block
			return new ResponseEntity("User Not found", org.springframework.http.HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/delete/{email}")
	public ResponseEntity<Void> deleteEmpById(@PathVariable("email") String email) {

		userservice.deleteEmailById(email);
		return new ResponseEntity<Void>(org.springframework.http.HttpStatus.ACCEPTED);
	}


	@PutMapping("/rate/{email}")
	public ResponseEntity<UserRegistration> addrating(@RequestBody UserRating add , @PathVariable String email) {
		
		return new ResponseEntity<UserRegistration>(userservice.addrating(add,email), org.springframework.http.HttpStatus.OK);
	}
	

	
	@PostMapping("/update/add")
	public ResponseEntity<UserRegistration> Updateuser(@RequestParam(value="str") String str, @RequestParam(value="file") MultipartFile file) throws JsonMappingException, JsonProcessingException   {
	 
			log.debug("Inside the UserRegistrationController -- Updateuser methods");
			return new ResponseEntity<UserRegistration>(userservice.adduser(str,file),org.springframework.http.HttpStatus.OK);
		
		
	}

	 
}
