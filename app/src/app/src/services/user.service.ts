import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginResponse } from '../model/user/login.response';
import { LoginRequest } from '../model/user/login.request';
import { User } from '../model/user.model';
import { RegisterRequest } from '../model/user/register.request';

@Injectable()
export class UserService {
  private apiURL = 'http://localhost:8080';
  private headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") });


  constructor(private httpClient: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${this.apiURL}/login/sign-in`,
      loginRequest
    );
  }
  
  getUser(): Observable<User> {
    console.log("Orice")
    return this.httpClient.get<User>(`${this.apiURL}/api/users/`,
    { headers: this.headers }
    );
  }

  upsertCurrentUserAccount(updatedUser: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiURL}`, updatedUser);
  }
  
  register(registerRequest: RegisterRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${this.apiURL}/sign-up`,
      registerRequest
    );
  }
}
