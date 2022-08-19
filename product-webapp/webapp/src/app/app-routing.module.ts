
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { RegisterProductComponent } from './component/register-product/register-product.component';
import { RecommendationServiceComponent } from './recommendation-service/recommendation-service.component';
import { RegisterUserComponent } from './register-user/register-user.component';


//import { LoginComponent } from 'src/login/login.component';

import { UpdateDetailsComponent } from './update-details/update-details.component';
import { TranscationsComponent } from './transcations/transcations.component';

const routes: Routes = [
  
  // {path :'login',component:LoginComponent},
  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'registerProduct', component: RegisterProductComponent },
  { path: 'productDetail', component: ProductdetailsComponent },
  { path: 'recommendation-service', component: RecommendationServiceComponent },
  { path: 'updateDetails', component: UpdateDetailsComponent },
  { path: 'home', component: AppComponent },
  {path:'transcations', component:TranscationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

