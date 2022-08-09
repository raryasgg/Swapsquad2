import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { UserRegistration } from '../user-registration';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: UserRegistration = new UserRegistration();
 // errorMessage: String = "";

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

   userRegister(){
    
    console.log(this.user);
    if(this.user.firstname=="" || this.user.lastname=="" ||
    this.user.age=="" || this.user.gender=="" || 
    this.user.email=="" || this.user.mobile=="" || this.user.password==""){
     // this.errorMessage="Fields cannot be empty"
      alert("Fields cannot be empty")
      
    }
    else{
    this.registerService.registerUser(this.user).subscribe(data=>{
     alert("Successfully register")
    },error=>alert("User Already Exist"));
  }}

}