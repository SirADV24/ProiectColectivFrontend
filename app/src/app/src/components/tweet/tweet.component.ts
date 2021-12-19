import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Tweet } from '../../model/tweet.model';
import { LikeService } from '../../services/like.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;
  @Output() onLikeTweet = new EventEmitter<number>();
  isLikedPost : boolean;

  constructor(private likeService: LikeService) {}

  ngOnInit() {
    this.tweet.date = new Date(this.tweet.date).toLocaleString();
    this.tweet.id !== undefined && this.likeService.isLikedPostByCurrentUser(this.tweet.id).subscribe((response) => this.isLikedPost = response);
  }

  likePost() {
    !this.isLikedPost ? this.tweet.number_likes = this.tweet.number_likes + 1 : this.tweet.number_likes = this.tweet.number_likes - 1;
    this.isLikedPost = !this.isLikedPost;
    this.onLikeTweet.emit(this.tweet.id)
  }
  
}
