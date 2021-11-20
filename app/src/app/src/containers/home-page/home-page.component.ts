import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from '../../model/tweet.model';
import { User } from '../../model/user.model';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  dummyTweets: Tweet[] = [];

  dummyUsers: User[] = [];

  constructor(private tweetService: TweetService, private router: Router) {}

  ngOnInit(): void {
    this.dummyUsers = [
      {
        id: 0,
        name: 'Gioni',
        account: 'Gionisimio El gioni',
      },
    ];
    this.dummyTweets = [
      {
        id: 0,
        text: 'Heloo',
        user: this.dummyUsers[0],
        date: '15-15-2020',
        number_comments: 3,
        number_likes: 2,
      },
      {
        id: 0,
        text: 'Heloo',
        user: this.dummyUsers[0],
        date: '15-15-2020',
        number_comments: 5,
        number_likes: 2,
      },
      {
        id: 0,
        text: 'Heloo',
        user: this.dummyUsers[0],
        date: '15-15-2020',
        number_comments: 5,
        number_likes: 2,
      },
      {
        id: 0,
        text: 'Heloo',
        user: this.dummyUsers[0],
        date: '15-15-2020',
        number_comments: 5,
        number_likes: 2,
      },
    ];
  }

  onCreateTweet(tweetText: string) {
    this.tweetService.createTweet(tweetText);
  }
}
