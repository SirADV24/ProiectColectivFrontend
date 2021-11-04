import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../services/user.service';
import { LoginRequest } from '../../model/user/login.request';
import { catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  error: HttpErrorResponse;

  constructor(private UserService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(loginRequest: LoginRequest) {
    this.UserService.login(loginRequest).pipe(
      tap((response) => {
        // Navigate to home page if login is successfully
        this.router.navigate(['home']);
      }),
      catchError((error) => {
        this.error = error;

        return of(false);
      })
    );
  }
}
