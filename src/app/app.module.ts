import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValuableComponent } from './valuable/valuable.component';
import { ValuablesService } from './valuables.service';
import { BasketComponent } from './basket/basket.component';
import { SignupComponent } from './access/signup/signup.component';
import { LoginComponent } from './access/login/login.component';
import { LogoutComponent } from './access/logout/logout.component';

import { httpInterceptorProviders } from './access/http-interceptors';
import { AdminComponent } from './admin/admin.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ValuableComponent,
    BasketComponent,
    SignupComponent,
	  LoginComponent,
	  LogoutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ValuablesService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
