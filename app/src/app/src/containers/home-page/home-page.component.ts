import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from '../../model/tweet.model';
import { User } from '../../model/user.model';
import { TweetService } from '../../services/tweet.service';
import { catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { LikeService } from '../../services/like.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  error: HttpErrorResponse;
  dummyTweets: Tweet[] = [];
  dataTweets: Tweet[] = [];

  dataUser: User;

  constructor(private tweetService: TweetService, private userService : UserService, private likeService: LikeService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
    this.getTweets();

  }

  onCreateTweet(tweetText: string) {
    this.tweetService
    .createTweet(tweetText)
    .pipe(
      tap((response: Tweet) => {
          this.dataTweets.push(response)
          console.log(response)
      }),
      catchError((error) => {
        this.error = error;

        return of(false);
      })
    )
    .subscribe();;
  }

  onLikeTweet(tweetId: number) {
    this.tweetService
      .likePost(tweetId)
      .pipe(
        tap((response: Tweet) => {
            const indexTweet = this.dataTweets.findIndex(tweet => tweet.id === tweetId);
            this.dataTweets[indexTweet].number_likes = response.number_likes;
        }),
        catchError((error) => {
          this.error = error;
  
          return of(false);
        })
      )
      .subscribe();;
  }

  getUsers(){
    console.log(this.userService.getUser());
  }

  getTweets(){
    this.tweetService.getPost()
      .subscribe((res) => {
        console.log(res);
        this.dataTweets = res;
      });
  }
}
