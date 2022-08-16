
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { RegisterProductComponent } from './component/register-product/register-product.component';
import { RecommendationServiceComponent } from './recommendation-service/recommendation-service.component';
import { RegisterUserComponent } from './register-user/register-user.component';
<<<<<<< HEAD
import { LoginComponent } from 'src/login/login.component';

const routes: Routes = [

  {path : 'registerUser', component : RegisterUserComponent},
  {path : 'registerProduct', component : RegisterProductComponent},
  {path : 'productDetail', component : ProductdetailsComponent},
  {path:'recommendation-service', component:RecommendationServiceComponent},
  // {path :'login',component:LoginComponent},

=======
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { TranscationsComponent } from './transcations/transcations.component';
const routes: Routes = [

  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'registerProduct', component: RegisterProductComponent },
  { path: 'productDetail', component: ProductdetailsComponent },
  { path: 'recommendation-service', component: RecommendationServiceComponent },
  { path: 'updateDetails', component: UpdateDetailsComponent },
  { path: 'home', component: AppComponent },
  {path:'transcations', component:TranscationsComponent}
>>>>>>> 9a1b1dfbcf3d12051dca9678fd800e7f4da65cf9


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

