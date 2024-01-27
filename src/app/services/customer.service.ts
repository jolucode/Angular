import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customertURL = `https://back2-3a06fb2e3a92.herokuapp.com`;

  constructor(private httpClient: HttpClient,  private authService: AuthService) { }


  // Obtén el token de tu fuente de autenticación (por ejemplo, AuthService)
  private getAuthorizationHeader(): string {
    const token = this.authService.getToken();
    console.log(token)
    return `Bearer ${token}`;
  }

  public list(): Observable<Customer[]> {
    const headers = new HttpHeaders({
      'Authorization': this.getAuthorizationHeader()
    });

    return this.httpClient.get<Customer[]>(this.customertURL + `/customers`, { headers });
  }

  public changeState(id: number): Observable<Customer> {
    const headers = new HttpHeaders({
      'Authorization': this.getAuthorizationHeader()
    });

    console.log(id);

    return this.httpClient.patch<Customer>( this.customertURL + `/customers/${id}`, {}, { headers });
  }

}
