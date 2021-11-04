import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-tweet-component',
  templateUrl: './create-tweet-component.component.html',
  styleUrls: ['./create-tweet-component.component.scss']
})
export class CreateTweetComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save(tweetText: string): void {
    console.log("this is save "+tweetText);
  }

}
