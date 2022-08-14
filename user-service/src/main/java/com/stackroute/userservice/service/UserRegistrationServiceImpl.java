package com.stackroute.userservice.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.stackroute.userservice.model.UserRating;
import com.stackroute.userservice.model.UserRegistration;
import com.stackroute.userservice.repo.UserRepo;

import lombok.extern.slf4j.Slf4j;
@Service
@Slf4j
public class UserRegistrationServiceImpl implements UserRegistrationService{
	
	@Autowired
	private UserRepo repo;

	@Override
	public UserRegistration addNew(UserRegistration emp) throws UserAlreadyExistException {
		Optional<UserRegistration> movie = repo.findById(emp.getEmail());
		if (movie.isPresent()) {
			throw new UserAlreadyExistException();
		} else {
			return repo.save(emp);
		}
	}

	public  UserRegistration getById(String emp) throws UserNotFoundException {
    	Optional<UserRegistration> pro = repo.findById(emp);
		if (pro.isPresent()) {
			return pro.get();
		} else {
			throw new UserNotFoundException ();
		}
    }

	@Override
	public void deleteEmailById(String emp) {
		// TODO Auto-generated method stub
		repo.deleteById(emp);
	}

	@Override
	public UserRegistration update(UserRegistration user) {
		UserRegistration savedEmployee = repo.save(user);
		return savedEmployee;
	}

	/*
	 * @Override public UserRegistration addNew(UserRating user) { return
	 * repo.save(null); }
	 */
	@Override
	public UserRegistration rate(UserRegistration user) {
	
		return repo.save(user);
	}

	@Override
	public UserRegistration addprod(String str, MultipartFile file) throws JsonMappingException, JsonProcessingException {
		log.debug("Inside the ProductServiceImpl -- addprod methods");
		ObjectMapper objectMapper = new ObjectMapper();
		UserRegistration prod = objectMapper.readValue(str,UserRegistration.class);
		
		try {
			prod.setImage(file.getBytes());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		repo.save(prod);
		return prod;
	}
		
}
