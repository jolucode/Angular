import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomerlistComponent } from './client/customerlist/customerlist.component';
import { LogslistComponent } from './support/logslist/logslist.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
{path: 'signup', component: SignupComponent },
{path: 'login', component:LoginComponent},
{ path: 'customers', component: CustomerlistComponent,
data: { role: 'FINANCE' }},
{ path: 'logs', component: LogslistComponent },{path: '**', component: PageNotFoundComponent,
data: { role: 'SUPPORT' }},
]


