import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerlistComponent } from './pages/customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [CustomerlistComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
  ],
})
export class CustomerModule {}
