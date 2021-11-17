import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tweet } from './src/model/tweet.model';
import { TweetService } from './src/services/tweet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = "Twitter Clone";
}
