import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../../model/tweet.model';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
})
export class TweetComponent implements OnInit {
  // tweet: Tweet = new Tweet();

  @Input() tweet: Tweet;
  @Input() user: User;

  ngOnInit() {
    // this.user.name = 'Manuela';
    // this.user.account = 'manuelamag';
    // this.tweet.text = 'Hello! This is my first post!';
    // this.tweet.number_likes = 200;
    // this.tweet.number_comments = 165;
    // this.tweet.date =
    //   ' ' +
    //   new Date().getHours().toString() +
    //   ':' +
    //   new Date().getMinutes().toString() +
    //   ' ' +
    //   new Date().getMonth().toString() +
    //   ' ' +
    //   new Date().getFullYear().toString();
  }
}
