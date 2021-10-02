import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { Err404Component } from './err404/err404.component';
import { ProductComponent } from './forms/product/product.component';
import { RegisterComponent } from './forms/register/register.component';
import { IsAdminLoggedGuard } from './guards/is-admin-logged.guard';
import { IsNotAdminLoggedGuard } from './guards/is-not-admin-logged.guard';
import { IsNotUserLoggedGuard } from './guards/is-not-user-logged.guard';
import { IsUserLoggedGuard } from './guards/is-user-logged.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SingleservicesComponent } from './pages/singleservices/singleservices.component';
import { ProductdetaileComponent } from './productdetaile/productdetaile.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
 {path:"home",component:HomeComponent},
  {path:"",component:LoginComponent},
  {path:"register", component:RegisterComponent,canActivate:[IsUserLoggedGuard]},
  //{path:"service", component:SingleservicesComponent},
  {path:"login", component:LoginComponent,canActivate:[IsUserLoggedGuard]},
  {path:"profile",component:ProfileComponent,canActivate:[IsNotUserLoggedGuard]},

  
  
  {path:"reactive",component:ReactiveComponent},

  {path:"adminRegister",component:AdminRegisterComponent,canActivate:[IsAdminLoggedGuard]},
  {path:"adminLogin",component:AdminLoginComponent,canActivate:[IsAdminLoggedGuard]},
  {path:"addProduct",component:ProductComponent,canActivate:[IsNotAdminLoggedGuard]},
  {path:"allProducts",component:AllproductsComponent,canActivate:[IsNotAdminLoggedGuard]},
  {path:"allProducts/:id", component:ProductdetaileComponent,canActivate:[IsNotAdminLoggedGuard]},
  {path:"editProduct/:id", component:EditProductComponent,canActivate:[IsNotAdminLoggedGuard]},
  {path:"deleteProduct/:id", component:DeleteProductComponent,canActivate:[IsNotAdminLoggedGuard]},

  

  {path:"**",component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
