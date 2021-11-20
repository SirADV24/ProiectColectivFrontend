import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tweet } from '../model/tweet.model';

@Injectable()
export class TweetService {
  private apiURL = 'http://localhost:8080/api/posts';

  private modals: any[] = [];

  constructor(private httpClient: HttpClient) {}

  createTweet(tweetText: string): Observable<Tweet> {
    return this.httpClient.post<Tweet>(
      `${this.apiURL}/create`,
      {"description": tweetText}
    );
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
