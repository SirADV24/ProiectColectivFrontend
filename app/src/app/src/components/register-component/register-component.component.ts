import { getLocaleDateTimeFormat } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { RegisterRequest } from '../../model/user/register.request';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent implements OnInit {
  error: any;

  constructor(private userService: UserService, private router: Router) { }

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  register(){
    if (!this.registerForm.valid) {
      return;
    }

    const registerRequest: RegisterRequest = {
      ...this.registerForm.value,
    };
    const myDate = new Date();
    registerRequest.creationDate = myDate.toString();

    this.userService
    .register(registerRequest)
    .pipe(
      tap((response) => {
        // Navigate to home page if register is successfully
        this.router.navigate(['home']);
      }),
      catchError((error) => {
        this.error = error;

        return of(false);
      })
    )
    .subscribe();
  }
}
