import { Component, OnInit } from '@angular/core';
import { Log } from '../../../../models/log';
import { LogsService } from '../../../../services/logs.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrl: './log-list.component.css',
})
export class LogslistComponent implements OnInit {
  logs: Log[] = [];
  actualCodeToSee!: string;
  language!: string;
  dialogTittle!: string;
  xmlRequestDialog!: boolean;
  loading: boolean = true;
  constructor(private logsService: LogsService) {}
  ngOnInit(): void {
    this.logsService.list().subscribe((data) => {
      this.logs = data;
      this.loading = false;
    });
  }
  seeXmlDialog(
    codeToSee: string,
    language: string,
    dialogTittle: string
  ): void {
    this.actualCodeToSee = codeToSee;
    this.language = language;
    this.dialogTittle = dialogTittle;
    this.xmlRequestDialog = true;
  }
  cargarLogs(): void {
    this.logsService.list().subscribe(
      (data) => {
        this.logs = data;
      },
      (err) => {
      }
    );
  }
}
