package com.stackroute.userservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter

	@Document(collection="users")
	public class UserRegistration {
		@Id
		private String   email;
		private String  firstname;
		private String  lastname;
		private int age;
		private String   gender;
		private int  mobile;
		private String  password;
		private String  cpassword;
		
}