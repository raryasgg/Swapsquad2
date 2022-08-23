
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { RegisterProductComponent } from './component/register-product/register-product.component';
import { RecommendationServiceComponent } from './recommendation-service/recommendation-service.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { TranscationsComponent } from './transcations/transcations.component';
import { ChatComponent } from './component/chat/chat.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'registerProduct', component: RegisterProductComponent },
  { path: 'productDetail', component: ProductdetailsComponent },
  { path: 'recommendation-service', component: RecommendationServiceComponent },
  { path: 'updateDetails', component: UpdateDetailsComponent },
  { path: 'home', component: AppComponent },
  {path:'transcations', component:TranscationsComponent},
  {path:'chat', component:ChatComponent},
  {path:'transcations', component:TranscationsComponent},
  {path:'myProfile', component: MyProfileComponent},
  {path:'navbar', component:NavbarComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

