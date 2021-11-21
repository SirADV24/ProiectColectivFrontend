import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../../model/tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;


  ngOnInit() {
    this.tweet.date = new Date(this.tweet.date).toLocaleString();
  }

  
}
