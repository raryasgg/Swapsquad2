import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Account } from 'src/app/models/account-data/account';
import { AccountService } from 'src/app/services/accounts-data/account.service';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-accountdata',
  templateUrl: './accountdata.component.html',
  styleUrls: ['./accountdata.component.css']
})
export class AccountdataComponent implements OnInit {
  accountForm: FormGroup;

  emaildataobj:any;

  accountObj: Account = new Account();
public accountdata : any;
  accountHolderName: any;
  accountNumber:any;
  expiryMonth: any;
  cvv: any;
  amount:any;
  email:any;
  // date = new FormControl(moment());

  // monthSelected(event, dp, input) {
  //   dp.close();
  //   input.value = event.toISOString().split('-').join('/').substr(0, 7);
  // }

  



  constructor( private fb: FormBuilder, private accountService: AccountService ) { 
    this.accountForm= new FormGroup({
      accountHolderName : new FormControl ("", [Validators.required]),
      accountNumber :new FormControl("",[Validators.required,Validators.pattern('[0-9 ]*')]),
      cvv : new FormControl("",[Validators.required,Validators.pattern('[0-9 ]*')]),
      expiryMonth: new FormControl("",[Validators.required]),
      email :new FormControl(""),
      
      // accountHolderName : new FormControl (),
      // accountNumber :new FormControl(),
      // cvv : new FormControl(),
      // expiryMonth: new FormControl(),
      amount: new FormControl()

    })
  }

  ngOnInit() {
    // this.accountService.getAccountDataByEmail("ravi@gmail.com").subscribe(resbyemail=>{
    //   this.emaildataobj=resbyemail;
    //   this.accountNumber=this.emaildataobj.accountNumber;

    // })


}

// save button
onSave(){
  if(!this.accountForm.invalid){
    console.log(this.accountForm.value);
    this.accountObj.accountHolderName=this.accountForm.value.accountHolderName;
    this.accountObj.accountNumber= this.accountForm.value.accountNumber;
    this.accountObj.cvv=this.accountForm.value.cvv;
    this.accountObj.expiryMonth=this.accountForm.value.expiryMonth;
    this.accountObj.email=this.accountForm.value.email;
    // this.accountObj.amount=this.accountForm.value.amount;
    this.accountService.addAccount(this.accountObj).subscribe(result =>
      console.log(result)
      );  this.accountForm.reset();
      Swal.fire({ icon: 'success', title: 'Successfully Saved !!', text: 'Your Account is added Succesfully !', })
     
  }
  
}


onclickgetaccount(){
  this.accountService.getAccountByAccountNumber(2222).subscribe(accresult =>{
    this.accountdata=accresult;
    console.log(this.accountdata);
    this.accountHolderName= this.accountdata.accountHolderName;
    this.accountNumber=this.accountdata.accountNumber;
    this.expiryMonth=this.accountdata.expiryMonth;
    this.cvv =  this.accountdata.cvv;
    this.email= this.accountdata.email;
  })

}

onAddCoin(){
console.log(this.accountForm.value)
this.accountObj.amount=this.accountForm.value.amount;
this.accountService.addAmount("ravi@gmail.com",this.accountObj.amount).subscribe(updateres =>{
  console.log(updateres)
} )

}
}
