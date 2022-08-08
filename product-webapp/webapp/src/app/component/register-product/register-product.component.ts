import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register-product",
  templateUrl: "./register-product.component.html",
  styleUrls: ["./register-product.component.css"],
})
export class RegisterProductComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
  }

// For adding the category
  othercatergory: boolean = false;
  show(x) {
    if(x==1){
      this.othercatergory = false;
    }else if(x==2){
      this.othercatergory = true
    }
    
  }

// for adding the coin and preference
  coin: boolean = false;
  preference: boolean = false;
  blankspace: boolean = true;
  text(x) {
    if (x == 0) {
      this.coin = true;
      this.preference = false;
    } else if (x == 1) {
      this.preference = true;
      this.coin = false;
      this.blankspace = false;
    } else if (x == 2) {
      this.coin = true;
      this.preference = true;
      this.blankspace = true;
    }
  }
}
