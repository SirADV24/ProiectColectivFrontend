import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../model/tweet.model';

@Injectable()
export class TweetService {
  private apiURL = 'http://localhost:8080/api';
  private headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") });

  private modals: any[] = [];

  private accessToken : string | null = localStorage.getItem('JWT');

  constructor(private httpClient: HttpClient) {}

  createTweet(description: string): Observable<Tweet> {
    const auth: string = "Bearer "+localStorage.getItem('JWT');
    return this.httpClient.post<Tweet>(
      `${this.apiURL}/posts/create`,
      description,
      {headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization : 'Bearer '+localStorage.getItem('JWT')
      })}
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

  getPost(){
    console.log("Token "  + this.accessToken)
    return this.httpClient.get<Tweet[]>(
      `${this.apiURL}/posts`,
      { headers: this.headers }
      );
    }

  likePost(postId: number){
    return this.httpClient.get<Tweet>(
      `${this.apiURL}/posts/like/${postId}`,
      { headers: this.headers }
      );
    }
}
