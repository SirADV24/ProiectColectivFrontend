import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginResponse } from '../model/user/login.response';
import { LoginRequest } from '../model/user/login.request';

@Injectable()
export class UserService {
  private apiURL = '';

  constructor(private httpClient: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    // Use this once API functionality is implemented

    // return this.httpClient.post<LoginResponse>(
    //   `${this.apiURL}/login`,
    //   loginRequest
    // );

    return of({
      userId: 1,
      username: 'Gioni',
      mail: 'gioni@mail.com',
    });
  }
}
