import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllProductComponent } from './allproduct/allproduct.component';
import { KidsComponent } from './kids/kids.component';
import { SprunchieComponent } from './sprunchie/sprunchie.component';
import { OriginalComponent } from './original/original.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';


// แก้ไขการอ้างอิง AuthService
import { AuthService } from '../../auth.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    NewproductComponent,
    AllProductComponent,
    AboutusComponent,
    KidsComponent,
    SprunchieComponent,
    OriginalComponent,
    ProductdetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    AuthService // เพิ่ม AuthService ใน providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
