import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from '../../model/tweet.model';
import { User } from '../../model/user.model';
import { TweetService } from '../../services/tweet.service';
import { catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user.service';

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

  constructor(private tweetService: TweetService, private userService : UserService, private router: Router) {}

  ngOnInit(): void {
    console.log("Here");
    this.getUsers();
    this.getTweets();

    // this.dummyUsers = [
    //   {
    //     id: 0,
    //     name: 'Gioni',
    //     account: 'Gionisimio El gioni',
    //   },
    // ];
    // this.dummyTweets = [
    //   {
    //     id: 0,
    //     text: 'Heloo',
    //     user: this.dummyUsers[0],
    //     date: '15-15-2020',
    //     number_comments: 3,
    //     number_likes: 2,
    //   },
    //   {
    //     id: 0,
    //     text: 'Heloo',
    //     user: this.dummyUsers[0],
    //     date: '15-15-2020',
    //     number_comments: 5,
    //     number_likes: 2,
    //   },
    //   {
    //     id: 0,
    //     text: 'Heloo',
    //     user: this.dummyUsers[0],
    //     date: '15-15-2020',
    //     number_comments: 5,
    //     number_likes: 2,
    //   },
    //   {
    //     id: 0,
    //     text: 'Heloo',
    //     user: this.dummyUsers[0],
    //     date: '15-15-2020',
    //     number_comments: 5,
    //     number_likes: 2,
    //   },
    // ];

  }

  onCreateTweet(tweetText: string) {
    console.log("home page");
    console.log(tweetText);
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
