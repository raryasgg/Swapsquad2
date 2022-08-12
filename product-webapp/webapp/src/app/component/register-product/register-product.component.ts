import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { DomSanitizer } from '@angular/platform-browser';
import { RegisterProductService } from '../../services/register-product-service/register-product.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Product } from '../../models/register-product/Product';



export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css'],
})

export class RegisterProductComponent implements OnInit {

  pexchange: any;
  productForm: FormGroup;
  constructor(private productService: RegisterProductService,
    private sanitizer: DomSanitizer, private fb: FormBuilder
  ) {
    this.productForm = new FormGroup({
      pcategory: new FormControl(),
      pname: new FormControl(),
      pdatepost: new FormControl(),
      desc: new FormControl(),
      pexchangetype: new FormControl(),
      pcoin: new FormControl(),
      pexchange: this.fb.array([], Validators.required),
      pemail: new FormControl(),
      plocation: new FormControl(),

    });
  }


  ngOnInit(): void {

  }

  productObj: Product = new Product();

  file = [];
  // onselect(e) {
  //   if (e.target.files) {
  //     for (var i = 0; i < File.length; i++) {
  //       var reader = new FileReader();
  //       reader.readAsDataURL(e.target.files[i]);
  //       console.log(reader);
  //       reader.onload = (e: any) => {
  //         this.urls.push(e.target.result);

  //       }
  //     }
  //   }
  //   console.log(this.urls)
  // }

  handleFileInput(files) {
    this.prepareFilesList(files);
  }
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.file.push(item);
    }
    this.uploadFilesSimulator(0);
  }
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.file.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.file[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.file[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  onClickSubmitForm() {

    console.log('SUCCESSFULLY');
    console.log(this.productForm.value);
    // this.productService.
    this.productObj.pcategory = this.productForm.value.pcategory;
    this.productObj.pname = this.productForm.value.pname;
    this.productObj.pdatepost = this.productForm.value.pdatepost;
    this.productObj.desc = this.productForm.value.desc;
    this.productObj.pexchangetype = this.productForm.value.pexchangetype;
    this.productObj.pexchange = this.productForm.value.pexchange;
    this.productObj.pemail = this.productForm.value.pemail;
    this.productObj.plocation = this.productForm.value.plocation;
    this.productObj.pcoin = this.productForm.value.pcoin;
    this.productService.addProduct(this.productObj, this.file[0]).subscribe(data =>
      console.log(data)
    )
  }




  // resetForm(){
  //   this.productForm.reset();
  // }

  // For adding the category
  othercatergory = false;
  show(x): void {
    if (x === 1) {
      this.othercatergory = false;
    } else if (x === 2) {
      this.othercatergory = true;
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

  // for chips

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  get fruitControls(): FormArray {
    return this.productForm.controls.pexchange as FormArray;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our product
    if ((value || "").trim()) {
      this.fruitControls.push(this.fb.control(value));
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(fruit: string): void {
    const index = this.fruitControls.value.indexOf(fruit);
    if (index >= 0) {
      this.fruitControls.removeAt(index);
    }
  }

  // end for chips





}

function value(value: any) {
  throw new Error('Function not implemented.');
}

function index(index: any, arg1: number) {
  throw new Error('Function not implemented.');
}

