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


  constructor(private httpClient: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${this.apiURL}/login/sign-in`,
      loginRequest
    );
  }

  getUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.apiURL}/api/users`,
    { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") }) }
    );
  }

  getUserAccount(userId: number): Observable<User>{
    return this.httpClient.get<User>(`${this.apiURL}/api/users/${userId}`,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") }) }
    );
  }

  upsertCurrentUserAccount(updatedUser: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiURL}`, updatedUser);
  }

  register(registerRequest: RegisterRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${this.apiURL}/login/sign-up`,
      registerRequest
    );
  }

  followUser(userId: number){
    return this.httpClient.get<User>(
      `${this.apiURL}/api/users/follow/${userId}`,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") }) }
    )
  }
}
