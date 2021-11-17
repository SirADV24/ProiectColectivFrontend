import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private tweetService: TweetService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreateTweet(tweetText: string) {
    this.tweetService.createTweet(tweetText)
  }

}
