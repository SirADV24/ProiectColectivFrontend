import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Tweet } from '../../model/tweet.model';
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
  @Output() onCommentGetId = new EventEmitter<Tweet>();
  isLikedPost : boolean;

  constructor(public router: Router, private likeService: LikeService, private tweetService: TweetService) {}

  ngOnInit() {
    this.tweet.date = new Date(this.tweet.date).toLocaleString();
    this.tweet.id !== undefined && this.likeService.isLikedPostByCurrentUser(this.tweet.id).subscribe((response) => this.isLikedPost = response);
  }

  likePost() {
    !this.isLikedPost ? this.tweet.number_likes = this.tweet.number_likes + 1 : this.tweet.number_likes = this.tweet.number_likes - 1;
    this.isLikedPost = !this.isLikedPost;
    console.log(this.tweet.id)
    this.onLikeTweet.emit(this.tweet.id)
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
