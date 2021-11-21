import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { LoginResponse } from '../model/user/login.response';
import { LoginRequest } from '../model/user/login.request';
import { Tweet } from '../model/tweet.model';

@Injectable()
export class TweetService {
  private apiURL = 'http://localhost:8080/api';
  private headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") });

  private modals: any[] = [];

  private accessToken : string | null = localStorage.getItem('JWT');

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

  getPost(){
    console.log("Token "  + this.accessToken)
    return this.httpClient.get<Tweet[]>(
      `${this.apiURL}/posts`,
      { headers: this.headers }
      );
    }
}
