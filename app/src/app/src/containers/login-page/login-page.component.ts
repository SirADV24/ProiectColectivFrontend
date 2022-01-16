import { Component, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from './../../services/user.service';
import { LoginRequest } from '../../model/user/login.request';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  error: HttpErrorResponse;

  constructor(private userService: UserService, private router: Router) { }

  onLogin(loginRequest: LoginRequest) {
    this.userService
      .login(loginRequest)
      .pipe(
        tap((response) => {
          // Navigate to home page if login is successfully
          localStorage.setItem('JWT', response.accessToken);
          this.router.navigate(['home']);

          
          this.setCurrentUser()
        }),
        catchError((error) => {
          this.error = error;

          return of(null);
        })
      )
      .subscribe();
  }

  setCurrentUser() {
    setTimeout(() => {
      this.userService.getUser().pipe(
        tap((x) => {
          localStorage.setItem('user', JSON.stringify(x));
          console.log(x);
        })
      ).subscribe();
    })
  }

  onRedirect() {
    this.router.navigate(['register'])
  }
}
