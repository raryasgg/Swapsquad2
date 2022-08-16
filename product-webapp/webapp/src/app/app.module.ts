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

@NgModule({
  declarations: [
    AppComponent,
    RegisterProductComponent,
    ProductdetailsComponent,
    RegisterUserComponent,
     RecommendationServiceComponent,
     LoginComponent,
     
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    Material1Module,
    HttpClientModule,
    MatPaginatorModule,
    Material3Module,
    


  ],
  providers: [ProductDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }





