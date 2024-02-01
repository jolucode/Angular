import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [LoginComponent,SignupComponent],
  imports: [
    CommonModule,
    HighlightJsDirective,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
  ],
})
export class AuthModule {}
