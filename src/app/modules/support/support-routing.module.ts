import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogslistComponent } from './pages/log-list/log-list.component';
import { authGuard } from '../../auth/guards/auth.guard';
import { roleGuard } from '../../auth/guards/role.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'logs',
    pathMatch: 'full',
  },
  {
    path: 'logs',
    component: LogslistComponent,
    canActivate: [authGuard,roleGuard],
    data: { role: 'SUPPORT' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {}
