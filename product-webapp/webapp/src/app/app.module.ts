<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterProductComponent } from './component/register-product/register-product.component';
import { MaterialModule } from './component/register-product/module/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Material1Module } from './component/productdetails/material1/material1.module';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {HttpClientModule} from '@angular/common/http';

import { RecommendationServiceComponent } from './recommendation-service/recommendation-service.component';
import {MatPaginatorModule} from '@angular/material/paginator';


import { Material3Module } from './register-user/material3/material3.module';

import { ProductDetailsService } from './component/productdetails/product-details.service';
import { SweetAlertGrow } from 'sweetalert2';
import { LoginComponent } from 'src/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
=======
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterProductComponent } from "./component/register-product/register-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductdetailsComponent } from "./component/productdetails/productdetails.component";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { HttpClientModule } from "@angular/common/http";
import { RecommendationServiceComponent } from "./recommendation-service/recommendation-service.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ProductDetailsService } from "./component/productdetails/product-details.service";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatRadioModule } from "@angular/material/radio";
import { SweetAlertGrow } from "sweetalert2";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranscationsComponent } from './transcations/transcations.component';
>>>>>>> 9a1b1dfbcf3d12051dca9678fd800e7f4da65cf9

@NgModule({
  declarations: [
    AppComponent,
    RegisterProductComponent,
    ProductdetailsComponent,
    RegisterUserComponent,
<<<<<<< HEAD
     RecommendationServiceComponent,
     LoginComponent,
     
=======
    RecommendationServiceComponent,
    UpdateDetailsComponent,
    TranscationsComponent,

>>>>>>> 9a1b1dfbcf3d12051dca9678fd800e7f4da65cf9
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    MatButtonModule,
    MatInputModule,
    Material1Module,
=======
>>>>>>> 9a1b1dfbcf3d12051dca9678fd800e7f4da65cf9
    HttpClientModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatRippleModule,
    MatStepperModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    FlexLayoutModule,
  ],
  providers: [ProductDetailsService],
  bootstrap: [AppComponent],
})
<<<<<<< HEAD
export class AppModule { }





=======

export class AppModule {}
>>>>>>> 9a1b1dfbcf3d12051dca9678fd800e7f4da65cf9
