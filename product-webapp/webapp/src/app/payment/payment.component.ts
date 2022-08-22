import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateDetailsService } from '../update-details.service';
import { UserRegistration } from '../user-registration'; 
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  // employees: UserRegistration = new UserRegistration();
  
  updateForm: FormGroup;
  errorMessage: string;
book:any


  acoin:100;
    price:45;
  constructor(private updateDetailsService: UpdateDetailsService) { 

    this.updateForm = new FormGroup({
      acoin: new FormControl(),
      price:new FormControl()
    })

  }

  ngOnInit(): void {


    
  }

  updateObj: UserRegistration = new UserRegistration();

  
  onClickSubmitForm() {
   
  
    
    this.updateObj.acoin = this.updateForm.value.acoin;
    this.updateObj. price = this.updateForm.value.price;

   console.log(this.updateForm.value);

    
     if(this.updateObj.acoin <= this.updateObj.price){
      alert("insufficient balance")
         this.errorMessage="Insufficient Balance "
        }
        else if(this.updateObj.acoin >= this.updateObj.price){
       alert("payment sucess")
           this.errorMessage="payment sucess"
         }
       
    
    else{
  
    
    alert("sucess")
    this.updateDetailsService.update123(this.updateObj).subscribe(data =>
      console.log(data)
    )}
  // To reset the form
    // this.updateForm.reset();
   
    

  }

}
