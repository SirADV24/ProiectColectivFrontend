import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LikeService {
  private apiURL = 'http://localhost:8080/api';
  private headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem("JWT") });

  private modals: any[] = [];

  private accessToken : string | null = localStorage.getItem('JWT');

  constructor(private httpClient: HttpClient) {}

  isPostLikedByCurrentUser(tweetId: number){
    console.log(localStorage.getItem('JWT'));
    return this.httpClient.get<boolean>(
        `${this.apiURL}/like/isPostLikedByUser/${tweetId}`,
        { headers: this.headers }
        );
    }
}
