import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserpageComponent } from './core/userpage/userpage.component';
import {CoreModule} from './core/core.module';
import { AppRoutingModule } from './app-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/service/auth.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
