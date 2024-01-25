import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router'
import { ListaCustomerComponent } from './client/lista-customer/lista-customer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';



const routes: Routes = [
  {path: 'signup', component: SignupComponent , pathMatch:  'full'},
  {path: 'login', component: LoginComponent, pathMatch:  'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
