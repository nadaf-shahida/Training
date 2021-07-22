import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  {path:'', component:LoginPageComponent},
  {path:'signup',component:SignupPageComponent},
  {path:'navbar',component:NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
