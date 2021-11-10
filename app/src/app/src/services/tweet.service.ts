import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginResponse } from '../model/user/login.response';
import { LoginRequest } from '../model/user/login.request';

@Injectable()
export class TweetService {
  private apiURL = '';

  constructor(private httpClient: HttpClient) {}

  createTweet(tweetText: string): void {
    // Use this once API functionality is implemented

    console.log(tweetText);
  }
}
