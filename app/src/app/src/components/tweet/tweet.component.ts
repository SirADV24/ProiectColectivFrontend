import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Tweet } from '../../model/tweet.model';
import { User } from '../../model/user.model';
import { LikeService } from '../../services/like.service';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;
  @Output() onLikeTweet = new EventEmitter<number>();
  
  constructor(public router: Router, private likeService: LikeService, private tweetService: TweetService) {}

  ngOnInit() {
    this.tweet.date = new Date(this.tweet.date).toLocaleString();
  }

  likePost() {
    const indexCurrentUser: number = JSON.parse(localStorage.getItem('user')).id;
    const indexLike: number = this.tweet.liked_by_user_ids.findIndex((id) => id === indexCurrentUser);
    if (indexLike !== -1) {
      this.tweet.liked_by_user_ids.slice(indexLike, 1);
    }
    else {
      this.tweet.liked_by_user_ids.push(indexCurrentUser);
    }
    this.onLikeTweet.emit(this.tweet.id)
  }

  isLikedPost() {
    return this.tweet.liked_by_user_ids.findIndex((id) => id === JSON.parse(localStorage.getItem('user')).id) !== -1;
  }

  commentPost(){
      console.log(this.tweet)
      console.log("here")
      this.tweetService.saveMainPostId(this.tweet.id);
      this.router.navigate([`/comments/${this.tweet.id}`])
      .then(() => {
        window.location.reload();
      });
    }

}
