import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportRoutingModule } from './support-routing.module';
import { LogslistComponent } from './pages/log-list/log-list.component';
import { HighlightJsDirective } from 'ngx-highlight-js';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from '../../shared/shared.module';
import { JsonFormatPipe } from '../../helpers/json-format.pipe';
@NgModule({
  declarations: [LogslistComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    HighlightJsDirective,

    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    JsonFormatPipe,
  ],
})
export class SupportModule {}
