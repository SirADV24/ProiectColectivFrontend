import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-tweet-component',
  templateUrl: './create-tweet-component.component.html',
  styleUrls: ['./create-tweet-component.component.scss']
})
export class CreateTweetComponentComponent implements OnInit {
  @Output() onCreateTweet = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  save(tweetText: string) {
    this.onCreateTweet.emit(tweetText);
  }

}
