import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { AuthService } from './auth.service';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private httpClient: HttpClient,  private authService: AuthService) { }


  // Obtén el token de tu fuente de autenticación (por ejemplo, AuthService)
  private getAuthorizationHeader(): string {
    const token = this.authService.getToken();
    return `Bearer ${token}`;
  }

  public list(): Observable<Customer[]> {
    const headers = new HttpHeaders({
      'Authorization': this.getAuthorizationHeader()
    });

    return this.httpClient.get<Customer[]>(baseUrl + `/customers`, { headers });
  }

  public changeState(id: number): Observable<Customer> {
    const headers = new HttpHeaders({
      'Authorization': this.getAuthorizationHeader()
    });


    return this.httpClient.patch<Customer>( baseUrl+ `/customers/${id}`, {}, { headers });
  }

}
