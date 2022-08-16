import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { UserRegistration } from '../user-registration';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {


  user:UserRegistration =new UserRegistration();
  errorMessage: String = "";
  emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  passwordPattern = new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}/);

 
 


  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
 
  }
  

   userRegister(){
    
    console.log(this.user);
    if(
    this.user.email=="" || this.user.password=="" || this.user.cpassword=="" ){
     // this.errorMessage="Fields cannot be empty"
     Swal.fire({icon: 'error',title: 'Oops...',text: 'Fields cannot be empty!', })
    }
     else if(this.user.password != this.user.cpassword){
      Swal.fire({icon: 'error',title: 'Oops...',text: 'Password Must Be Same', })
        this.errorMessage="Password Must Be Same"
      }
    
    else{
    this.registerService.registerUser(this.user).subscribe(data=>{
      
      Swal.fire('Successfully done !!', 'User is Registered ' , 'success');
    },error=> Swal.fire({icon: 'error',title: 'Oops...',text: 'User Already Exist!', }));
  }}

}