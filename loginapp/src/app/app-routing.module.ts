import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/registerForm.component';
import { LoginComponent } from './login-form/loginForm.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'register', component: RegisterFormComponent},
  {path:'login', component: LoginComponent},
  {path:'profile', component:ProfileComponent},
  {path:'', redirectTo:'register', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})

export class AppRoutingModule {

 }
