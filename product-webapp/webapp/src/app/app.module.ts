import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { RegisterUserComponent } from './register-user/register-user.component';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent
=======
import { RegisterProductComponent } from './component/register-product/register-product.component';
import { MaterialModule } from './component/register-product/module/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Material1Module } from './component/productdetails/material1/material1.module';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterProductComponent,
    ProductdetailsComponent
>>>>>>> 1187ab91b12d8342c954442f8a0883132bba7554
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatGridListModule,
    MatToolbarModule
=======
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Material1Module

>>>>>>> 1187ab91b12d8342c954442f8a0883132bba7554
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
