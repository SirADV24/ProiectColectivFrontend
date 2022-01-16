import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../model/tweet.model';

@Injectable()
export class TweetService {
  private apiURL = 'http://localhost:8080/api';


  private modals: any[] = [];

  private mainId : number;

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

  createComment(mainpostId: number, description: string): Observable<Tweet> {
    const auth: string = "Bearer "+localStorage.getItem('JWT');
    return this.httpClient.post<Tweet>(
      `${this.apiURL}/posts/${mainpostId}/comment`,
      description,
      {headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization : 'Bearer '+localStorage.getItem('JWT')
      })}
    );
  }

  getPost(){
    return this.httpClient.get<Tweet[]>(
      `${this.apiURL}/posts`,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") }) }
      );
    }

  getPostsForUser(id : number){
    return this.httpClient.get<Tweet[]>(
      `${this.apiURL}/posts/${id}`,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") }) }
      );
  }

  likePost(postId: number){
    return this.httpClient.get<Tweet>(
      `${this.apiURL}/posts/like/${postId}`,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") }) }
      );
    }

  getMainPost(mainpostId: number){
    return this.httpClient.get<Tweet>(
      `${this.apiURL}/posts/${mainpostId}/post`,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") }) }
      );
  }

  createMainPost(mainpostId: number, description: string){
    return this.httpClient.post<Tweet>(
      `${this.apiURL}/posts/${mainpostId}/comment`,
      description,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") }) }
      );
  }

  getComments(mainpostId: number){
    return this.httpClient.get<Tweet[]>(
      `${this.apiURL}/posts/${mainpostId}/comment`,
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") }) }
      );
    }

  saveMainPostId(id : number){
    localStorage.setItem("mainId", id.toString());
  }

  getMainPostId(){
    return +localStorage.getItem("mainId");
  }
}
