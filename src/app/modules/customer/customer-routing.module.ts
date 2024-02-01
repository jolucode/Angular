import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './pages/customer-list/customer-list.component';
import { authGuard } from '../../auth/guards/auth.guard';
import { roleGuard } from '../../auth/guards/role.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: CustomerlistComponent,
    canActivate: [authGuard,roleGuard],
    data: { role: 'FINANCE' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
