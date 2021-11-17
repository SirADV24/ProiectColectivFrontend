import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../../model/user/login.request';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponentComponent {
  @Input() error: HttpErrorResponse;

  @Output() onLogin = new EventEmitter<LoginRequest>();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    if (!this.loginForm.valid) {
      return;
    }

    const loginRequest: LoginRequest = {
      ...this.loginForm.value,
    };

    this.onLogin.emit(loginRequest);
  }
}
