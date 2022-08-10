import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './class/file-handle';
import { RegisterProduct } from './class/register-product';
import { RegisterProductService } from './service/register-product.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Product } from './class/Product';


export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css'],
})

export class RegisterProductComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  exchangeList: any;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private registerProductService: RegisterProductService,
    private sanitizer: DomSanitizer, private fb: FormBuilder
  ) { 
   
   }


  // for Product form
  productForm = new FormGroup({
    pcategory:new FormControl(),
    pname: new FormControl(),
    pdatepost: new FormControl(),
    desc: new FormControl(),
    pexchange:new FormControl(),
    pcoin: new FormControl(),
    exchangeList:new FormControl(),
    pemail: new FormControl(),
    plocation: new FormControl(),
  });


  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    
  }

  onClickSubmitForm() {
    console.log('successfully');
    console.log(this.productForm.value)
  }

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
  fruits: Fruit[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  // end for chips


  registerProduct: RegisterProduct = {
    pemail: "",
    pname: "",
    image: [],
    controls: undefined
  }

  addProduct(registerProductForm: NgForm) {
    const productFormData = this.prepareFormData(this.registerProduct);

    console.log(this.registerProduct);
    console.log(productFormData);

    this.registerProductService.addProduct(this.registerProduct).subscribe(
      // this.registerProductService.addProduct(productFormData).subscribe(
      (response: RegisterProduct) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  prepareFormData(registerProduct: RegisterProduct): FormData {
    const formData = new FormData();
    formData.append(
      'product',
      new Blob([JSON.stringify(registerProduct)], { type: 'application/json' })
    );

    for (var i = 0; i < registerProduct.image.length; i++) {
      formData.append(
        'image',
        registerProduct.image[i].file,
        registerProduct.image[i].file.name
      );
    }
    return formData;
  }

  onFileSelected(event) {
    console.log(event);
    if (event.target.files) {
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.registerProduct.image.push(fileHandle);
    }
  }

  removeImages(i: number) {
    this.registerProduct.image.splice(i, 1);
  }

 
}





function value(value: any) {
  throw new Error('Function not implemented.');
}

function index(index: any, arg1: number) {
  throw new Error('Function not implemented.');
}

