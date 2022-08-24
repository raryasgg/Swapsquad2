import { Component, OnInit } from "@angular/core";
import { Product } from "../component/productdetails/product";
import { ProductDetailsService } from "../component/productdetails/product-details.service";
import { MatDialogRef } from "@angular/material/dialog";
import { UpdateDetailsService } from "../update-details.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import Swal from "sweetalert2";
import { UserRegistration } from "../user-registration";
import { Transaction } from "../transaction";
import { TransactionService } from "../transaction.service";
import { EmailService } from "../email.service";
import { EmailDetails } from "../email-details";
@Component({
  selector: "app-payment3",
  templateUrl: "./payment3.component.html",
  styleUrls: ["./payment3.component.css"],
})
export class Payment3Component implements OnInit {
  public abc: Array<Product> = [];

  updateForm: FormGroup;

  constructor(
    private _productdetailsService: ProductDetailsService,
    public dialogRef: MatDialogRef<Payment3Component>,
    private userservice: UpdateDetailsService,
    private router: Router,
    private tranactionservice: TransactionService,
    private emailservice: EmailService
  ) {
    this.updateForm = new FormGroup({
      pid: new FormControl(),
    });
  }

  public productdata: any;
  pid = 1001;
  pname = "One Plus 9r";
  desc =
    " Operating System: OxygenOS based on Android 11 CPU: Qualcomm® Snapdragon™ 870.. GPU: Adreno 650. RAM: 8GB/12GB";
  pcoin = 20000;
  pemail = "raju@gmail.com";

  public coindata: any;
  barterCoins = 5000;
  email: any;
  recipent: any;
  ngOnInit(): void {
    this._productdetailsService
      .getProductDetailsByEmail("raryasgg@gmail.com")
      .subscribe((data: any) => {
        console.log("data", data);
        for (let i = 0; i < data.length; i++) {
          this.abc.push(data[i]);
        }

        console.log(this.abc);
      });

    this._productdetailsService.getProductDetailsById(15).subscribe((data) => {
      this.productdata = data;
      console.log(this.productdata);
      this.pname = this.productdata.pname;
      this.desc = this.productdata.desc;
      this.pcoin = this.productdata.pcoin;
      this.pid = this.productdata.pid;
      this.pemail = this.productdata.pemail;
    });

    this.userservice
      .getUserCoinByEmail("raryasgg@gmail.com")
      .subscribe((data) => {
        this.coindata = data;
        console.log(this.coindata);
        this.barterCoins = this.coindata.barterCoins;
        this.email = this.coindata.email;
      });
  }

  onClose() {
    this.dialogRef.close();
  }

  addcoin() {
    this.router.navigate(["payment"]);
  }

  productObj: Product = new Product();
  userObj: UserRegistration = new UserRegistration();
  transactionObj: Transaction = new Transaction();
  emailObj: EmailDetails = new EmailDetails();

  onClickSubmitForm() {
    console.log(this.updateForm.value);

    this.productObj.pid = this.updateForm.value.pid;
    console.log(this.updateForm.value.pid);
    this._productdetailsService
      .updateProductNotAvailable(this.updateForm.value.pid)
      .subscribe((data) => console.log(data));
    Swal.fire({
      icon: "success",
      title: "Set for NotAvailable!!",
      text: "Thank You!",
    });

    console.log(this.coindata.email);
    console.log(this.productdata.pemail);
    console.log(this.productdata.pcoin);
    this.userservice
      .exchange(
        this.coindata.email,
        this.productdata.pemail,
        this.productdata.pcoin
      )
      .subscribe((data) => console.log(data));
    Swal.fire({
      icon: "success",
      title: "Requested for Exchange!!",
      text: "Thank You!",
    });

    console.log(this.coindata.email);
    console.log(this.productdata.pemail);
    console.log(this.productdata.pname);
    console.log(this.updateForm.value.pname);
    this.transactionObj.buyerEmail = this.coindata.email;
    this.transactionObj.sellerEmail = this.productdata.pemail;
    this.transactionObj.productSend = this.productdata.pname;
    this.transactionObj.productObtained = this.updateForm.value.pname;
    this.tranactionservice
      .saveTransaction(this.transactionObj)
      .subscribe((data) => console.log(data));
    Swal.fire({
      icon: "success",
      title: "Tranaction Saved!!",
      text: "Thank You!",
    });

    this.emailObj.recipient = this.coindata.email;
    console.log(this.emailObj.recipient);
    this.emailservice
      .emailnotification(this.emailObj)
      .subscribe((data) => console.log(data));
    Swal.fire({
      icon: "success",
      title: "Transaction Sucessfully!!",
      text: "Thank You!",
    });
  }
}
