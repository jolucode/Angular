import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { AuthService } from './auth.service';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogsService {


  constructor(private httpClient: HttpClient,  private authService: AuthService) { }


  // Obtén el token de tu fuente de autenticación (por ejemplo, AuthService)
  private getAuthorizationHeader(): string {
    const token = this.authService.getToken();
    console.log(token)
    return `Bearer ${token}`;
  }

  public list(): Observable<Log[]> {
    const headers = new HttpHeaders({
      'Authorization': this.getAuthorizationHeader()
    });

    return this.httpClient.get<Log[]>(`https://back2-3a06fb2e3a92.herokuapp.com/logs`, { headers });
  }


  /*public list(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`http://localhost:8111/customers/all`);
  }

  public changeState(id: number): Observable<Customer> {
    return this.httpClient.put<Customer>(this.customertURL + `update/${id}`, {});
  }*/


}
