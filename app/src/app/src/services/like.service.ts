import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../model/tweet.model';

@Injectable()
export class LikeService {
  private apiURL = 'http://localhost:8080/api';
  private headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") });

  private modals: any[] = [];

  private accessToken : string | null = localStorage.getItem('JWT');

  constructor(private httpClient: HttpClient) {}

  isLikedPostByCurrentUser(tweetId: number){
    return this.httpClient.get<boolean>(
        `${this.apiURL}/like/isPostLikedByUser/${tweetId}`,
        { headers: this.headers }
        );
    }
}