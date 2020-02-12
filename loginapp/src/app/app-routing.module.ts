import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/registerForm.component';
import { LoginComponent } from './login-form/loginForm.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileGaurdService } from './profile-gaurd.service';
import { KendoComponent } from './kendo/kendo.component';


const routes: Routes = [
  {path: 'register', component: RegisterFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'kendo', component: KendoComponent},
  {path: 'profile', canActivate: [ProfileGaurdService], component: ProfileComponent},
  {path: '', redirectTo: 'register', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ProfileGaurdService
  ]
})

export class AppRoutingModule {

 }
