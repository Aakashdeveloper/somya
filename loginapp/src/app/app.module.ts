import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { RegisterFormComponent } from './register-form/registerForm.component';
import { LoginComponent } from './login-form/loginForm.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterService } from './register-form/registerForm.service';
import { LoginService } from './login-form/login.service';
import { ProfileService } from './profile/profile.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { KendoComponent } from './kendo/kendo.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';




@NgModule({
  declarations: [
    AppComponent,
    AdminFormComponent,
    RegisterFormComponent,
    LoginComponent,
    ProfileComponent,
    KendoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    ButtonsModule,
    ChartsModule
  ],
  providers: [
    RegisterService,
    LoginService,
    ProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
