import { Component, OnInit } from '@angular/core';
import { Log } from '../../../../models/log';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { LogsService } from '../../../../services/logs.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrl: './log-list.component.css',
  providers: [MessageService],
})
export class LogslistComponent implements OnInit {
  logs: Log[] = [];
  actualCodeToSee!: string;
  language!: string;
  dialogTittle!: string;
  xmlRequestDialog!: boolean;
  needFormat!: boolean;
  mostrarMensaje!: boolean;
  loading: boolean = true;
  constructor(
    private logsService: LogsService,
    private config: PrimeNGConfig,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.config.setTranslation({
      matchAll: 'Coincidir todo',
      matchAny: 'Al menos uno',
      addRule: 'Añadir regla',
      clear: 'Limpiar',
      apply: 'Aplicar',
      dateIs: 'Fecha es',
      dateIsNot: 'Fecha no es',
      dateAfter: 'Despues de',
      dateBefore: 'Antes de',
    });
    this.logsService.list().subscribe((data) => {
      this.logs = data;
      this.loading = false;
      this.logs.forEach((log) => {
        if (log.requestDate) {
          log.requestDate = new Date(log.requestDate);
        }

        if (log.responseDate) {
          log.responseDate = new Date(log.responseDate);
        }
        
        if (log.thirdPartyServiceInvocationDate) {
          log.thirdPartyServiceInvocationDate = new Date(
            log.thirdPartyServiceInvocationDate
          );
        }

        if (log.thirdPartyServiceResponseDate) {
          log.thirdPartyServiceResponseDate = new Date(
            log.thirdPartyServiceResponseDate
          );
        }
      });
    });
  }
  seeXmlDialog(
    codeToSee: string,
    language: string,
    dialogTittle: string,
    needFormat: boolean = false
  ): void {
    this.actualCodeToSee = codeToSee;
    this.language = language;
    this.dialogTittle = dialogTittle;
    this.xmlRequestDialog = true;
    this.needFormat = needFormat;
  }
  copyCode() {
    if (this.actualCodeToSee)
      navigator.clipboard.writeText(this.actualCodeToSee);
    this.mostrarMensaje = true;
    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 1500);
  }
}
