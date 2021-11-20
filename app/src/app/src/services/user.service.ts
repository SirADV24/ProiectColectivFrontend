import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginResponse } from '../model/user/login.response';
import { LoginRequest } from '../model/user/login.request';

@Injectable()
export class UserService {
  private apiURL = 'http://localhost:8080/login';

  constructor(private httpClient: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${this.apiURL}/login`,
      loginRequest
    );
  }
}
