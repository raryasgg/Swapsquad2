package com.stackroute.userservice.service;

import com.stackroute.userservice.model.UserRegistration;

public interface UserRegistrationService {
	
	public UserRegistration addNew(UserRegistration emp) throws UserAlreadyExistException;
	public UserRegistration getById(String emp) throws UserNotFoundException;
	public void deleteEmailById(String emp);
	public UserRegistration update(UserRegistration user);
    
}
