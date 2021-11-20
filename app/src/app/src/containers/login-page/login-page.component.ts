import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from './../../services/user.service';
import { LoginRequest } from '../../model/user/login.request';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  error: HttpErrorResponse;

  constructor(private userService: UserService, private router: Router) {}

  onLogin(loginRequest: LoginRequest) {
    this.userService
      .login(loginRequest)
      .pipe(
        tap((response) => {
          // Navigate to home page if login is successfully
          localStorage.setItem('JWT', response.accessToken);
          this.router.navigate(['home']);
        }),
        catchError((error) => {
          this.error = error;

          return of(false);
        })
      )
      .subscribe();
  }
  onRedirect(){
    this.router.navigate(['register'])
  }
}
