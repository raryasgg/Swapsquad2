import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterProductComponent } from './component/register-product/register-product.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { MaterialModule } from './component/register-product/module/material/material.module';
import { Material1Module } from './component/productdetails/material1/material1.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterProductComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    Material1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
