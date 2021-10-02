import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleservicesComponent } from './pages/singleservices/singleservices.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContactComponent } from './shared/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RegisterComponent } from './forms/register/register.component';
import { ProductComponent } from './forms/product/product.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserInterceptor } from './providers/user.interceptor';
import { ProductdetaileComponent } from './productdetaile/productdetaile.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Err404Component } from './err404/err404.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleservicesComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ReactiveComponent,
    AllproductsComponent,
    ProfileComponent,
    ProductdetaileComponent,
    EditProductComponent,
    DeleteProductComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    Err404Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:UserInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
