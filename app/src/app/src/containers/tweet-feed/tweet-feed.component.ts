import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../model/tweet.model';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-tweet-feed',
  templateUrl: './tweet-feed.component.html',
  styleUrls: ['./tweet-feed.component.scss']
})
export class TweetFeedComponent implements OnInit {

  constructor(private tweetService : TweetService){}

  dataTweets: Tweet[] = [];

  ngOnInit(): void {
  }

  getTweets(){
    this.tweetService.getPost()
      .subscribe((res) => {
        console.log(res);
        this.dataTweets = res;
      });
  }
  

}
