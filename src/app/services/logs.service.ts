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
    return `Bearer ${token}`;
  }

  public list(): Observable<Log[]> {
    const headers = new HttpHeaders({
      'Authorization': this.getAuthorizationHeader()
    });

    return this.httpClient.get<Log[]>(`https://finance-28012024-b9baa90dd280.herokuapp.com/logs`, { headers });
  }


  /*public list(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`https://finance-28012024-b9baa90dd280.herokuapp.com/customers/all`);
  }

  public changeState(id: number): Observable<Customer> {
    return this.httpClient.put<Customer>(this.customertURL + `update/${id}`, {});
  }*/


}
