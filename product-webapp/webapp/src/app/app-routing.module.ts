
import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {ProductdetailsComponent} from './component/productdetails/productdetails.component';
import {RegisterProductComponent} from './component/register-product/register-product.component';
import { RecommendationServiceComponent } from './recommendation-service/recommendation-service.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent } from 'src/login/login.component';

const routes: Routes = [

  {path : 'registerUser', component : RegisterUserComponent},
  {path : 'registerProduct', component : RegisterProductComponent},
  {path : 'productDetail', component : ProductdetailsComponent},
  {path:'recommendation-service', component:RecommendationServiceComponent},
  // {path :'login',component:LoginComponent},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

