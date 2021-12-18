import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../model/tweet.model';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  dataTweets: Tweet[] = [];
  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.getTweetsForUser();
  }
  getTweetsForUser() {
    this.tweetService.getPost()
      .subscribe((res) => {
        this.dataTweets = res;
      });
  }

}
