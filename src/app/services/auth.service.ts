import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthResponse } from '../auth/interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://finance-28012024-b9baa90dd280.herokuapp.com';
  private userPayload: any;
  constructor(private http: HttpClient) {}


  login( username: string, password: string ): Observable<any>{
    const url = `${ this.apiUrl }/login`;
    const body = {username, password};

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( (resp) => {
          if( resp.token ){
            localStorage.setItem('token',resp.token!)
          }
        }),
        map( resp => resp.token ),
        catchError(err => of(err.err.msg))

      );
  }

  getToken(){
    return localStorage.getItem('token');
  }
  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  decodedToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    return jwtHelper.decodeToken(token);
  }
  signOut(){
    localStorage.clear();
  }

  getRoleFromToken(){
    this.userPayload = this.decodedToken();

    if(this.userPayload)
    return this.userPayload.role;
  }

  // You may want to implement other authentication-related methods (e.g., logout, check authentication status) here.
}
