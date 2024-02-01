import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./modules/support/support.module').then((m) => m.SupportModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./modules/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// import { RouterModule, Routes } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { CustomerlistComponent } from './client/customerlist/customerlist.component';
// import { LogslistComponent } from './support/logslist/logslist.component';
// import { LoginComponent } from './auth/login/login.component';
// import { SignupComponent } from './auth/signup/signup.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// export const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () =>
//       import('./modules/auth/auth.module').then((m) => m.AuthModule),
//   },
//   { path: 'signup', component: SignupComponent },
//   {
//     path: 'customers', component: CustomerlistComponent,
//   },
//   // { path: 'logs', component: LogslistComponent },
//   { path: 'support', loadChildren:() => import('./modules/support/support.module').then((m)=>m.SupportModule) },
//   { path: '**', component: PageNotFoundComponent },
// ];
