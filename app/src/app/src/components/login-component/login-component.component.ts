import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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


  foo(){
    this.onLogin.emit();
  }
}
