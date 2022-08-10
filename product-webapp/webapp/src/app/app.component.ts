// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Learnzilla';

// }

import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatChipInputEvent } from "@angular/material/chips";

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    constructor(private fb: FormBuilder) {
      this.productForm = this.fb.group({
        fruits: this.fb.array([], Validators.required)
      });
    }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  productForm: FormGroup;

  get fruitControls(): FormArray {
    return this.productForm.controls.fruits as FormArray;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
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

  onClickSubmitForm(){
    console.log(this.productForm.value)
  }
}
