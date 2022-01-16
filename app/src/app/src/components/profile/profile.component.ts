import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, of, tap } from "rxjs";
import { TweetService } from "../../services/tweet.service";
import { Tweet } from "../../model/tweet.model";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  error: HttpErrorResponse;
  user: User;
  currentUser: User;
  userId: number;
  loading: boolean = false;
  tweets: Tweet[];
  option: number = 0;
  followed: boolean = false;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router,
    private tweetService: TweetService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap((params) => {
        this.userId = +params.id
        this.loading = true;
        this.getUser();
        this.tweetService.getPostsForUser(this.userId).subscribe(x => { this.tweets = x });
      })
    ).subscribe();
    this.currentUser = JSON.parse(localStorage.getItem('user'));


  }

  onLikeTweet(tweetId: number) {
    this.tweetService
      .likePost(tweetId)
      .pipe(
        tap((response: Tweet) => {
          const indexTweet = this.tweets.findIndex(tweet => tweet.id === tweetId);
          this.tweets[indexTweet].liked_by_user_ids = response.liked_by_user_ids;
        }),
        catchError((error) => {
          this.error = error;

          return of(false);
        })
      )
      .subscribe();
  }

  getUser() {
    this.userService.getUserAccount(this.userId)
      .subscribe((res) => {
        this.user = res;
        this.loading = false;
      });
  }

  goBack() {
    this.router.navigate(["home"]);
  }

  follow() {
    this.userService.followUser(this.userId)
      .pipe(
        tap((x) => {
          console.log(x)
        })
      )
      .subscribe();
  }

  isFollowing() {
    this.followed = true;
  }

  stopFollowing() {
    this.followed = false;
  }

  changeOption() {
    //shows followers
    this.option = 1;
  }

  changeOptionTweets() {
    //show tweets
    this.option = 0;
  }
}
