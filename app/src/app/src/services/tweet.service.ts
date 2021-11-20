import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginResponse } from '../model/user/login.response';
import { LoginRequest } from '../model/user/login.request';

@Injectable()
export class TweetService {
  private apiURL = '';

  private modals: any[] = [];

  constructor(private httpClient: HttpClient) {}

  createTweet(tweetText: string): void {
    // Use this once API functionality is implemented

    console.log(tweetText);
  }
  home(since: string) {
    throw new Error('Method not implemented.');
  }

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    // remove modal from array of active modals
    this.modals = this.modals.filter((x) => x.id !== id);
  }

  open(id: string) {
    // open modal specified by id
    let modal: any = this.modals.filter((x) => x.id === id)[0];
    modal.open();
  }

  close(id: string) {
    // close modal specified by id
    let modal: any = this.modals.filter((x) => x.id === id)[0];
    modal.close();
  }
}
