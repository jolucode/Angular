import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customertURL = `http://localhost:8111/customers`;

  constructor(private httpClient: HttpClient) { }

  // Obtén el token de tu fuente de autenticación (por ejemplo, AuthService)
  private getAuthorizationHeader(): string {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJGSU5BTkNFIl0sInBhc3N3b3JkLWRlbW8iOiJzYW1wbGUiLCJ1c2VybmFtZSI6ImpuYW5vQHZzcGVydS5jb20iLCJzdWIiOiJqbmFub0B2c3BlcnUuY29tIiwiaWF0IjoxNzA2MTkxNzQxLCJleHAiOjE3MDYxOTQ1NDF9.ezePcQkosiC54ptawXFH9edaHu_IbJo3WEEu0-4ZfUrU1eqYaJdufANvPnQEE4oQaU7IPuF6f3R1dhNZWHTB-A';
    return `Bearer ${token}`;
  }

  public list(): Observable<Customer[]> {
    const headers = new HttpHeaders({
      'Authorization': this.getAuthorizationHeader()
    });

    return this.httpClient.get<Customer[]>(`http://localhost:8111/customers`, { headers });
  }

  public changeState(id: number): Observable<Customer> {
    const headers = new HttpHeaders({
      'Authorization': this.getAuthorizationHeader()
    });

    return this.httpClient.put<Customer>(this.customertURL + `update/${id}`, {}, { headers });
  }

  /*public list(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`http://localhost:8111/customers/all`);
  }

  public changeState(id: number): Observable<Customer> {
    return this.httpClient.put<Customer>(this.customertURL + `update/${id}`, {});
  }*/


}
