import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path:'registerUser',component:RegisterUserComponent}
=======
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { RegisterProductComponent } from './component/register-product/register-product.component';


const routes: Routes = [
  {path : 'registerProduct', component : RegisterProductComponent},
  {path : 'productDetail', component : ProductdetailsComponent},
>>>>>>> 1187ab91b12d8342c954442f8a0883132bba7554
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
