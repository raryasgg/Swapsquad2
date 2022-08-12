import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterProductComponent } from './component/register-product/register-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Material1Module } from './component/productdetails/material1/material1.module';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {HttpClientModule} from '@angular/common/http';
import { RecommendationServiceComponent } from './recommendation-service/recommendation-service.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Material3Module } from './register-user/material3/material3.module';
import { ProductDetailsService } from './component/productdetails/product-details.service';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { SweetAlertGrow } from 'sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    RegisterProductComponent,
    ProductdetailsComponent,
    RegisterUserComponent,
     RecommendationServiceComponent,
     
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    Material1Module,
    HttpClientModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    Material3Module,
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
    Material3Module,
    
    
  ],
  providers: [ProductDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
