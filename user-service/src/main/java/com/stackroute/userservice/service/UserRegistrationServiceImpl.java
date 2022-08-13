package com.stackroute.userservice.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.userservice.model.UserRating;
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
		
		
}
