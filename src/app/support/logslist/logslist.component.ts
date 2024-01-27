import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Log } from '../../models/log';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import { LogsService } from '../../services/logs.service';

@Component({
  selector: 'app-logslist',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './logslist.component.html',
  styleUrl: './logslist.component.css'
})
export class LogslistComponent implements OnInit{

  logs: Log[]= [] ;
  constructor(private logsService: LogsService){}
  ngOnInit(): void {
    this.cargarLogs();
  }
  cargarLogs() : void {
  this.logsService.list().subscribe(
    data => {
      this.logs = data;
      console.log(this.logs)
    },
    err => {
      console.log(err);
    }
  )
}
}



