package com.stackroute.userservice.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.userservice.model.UserRegistration;
import com.stackroute.userservice.repo.UserRepo;
@Service
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

}
