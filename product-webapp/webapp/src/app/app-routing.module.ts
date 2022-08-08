import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { RegisterProductComponent } from './component/register-product/register-product.component';


const routes: Routes = [
  {path : 'registerProduct', component : RegisterProductComponent},
  {path : 'productDetail', component : ProductdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
