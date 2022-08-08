package com.stackroute.userservice.service;

import com.stackroute.userservice.model.UserRegistration;

public interface UserRegistrationService {
	
	public UserRegistration addNew(UserRegistration emp) throws UserAlreadyExistException;

}
