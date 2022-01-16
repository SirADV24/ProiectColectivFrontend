import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { Tweet } from '../../model/tweet.model';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss']
})
export class CommentPageComponent implements OnInit{
  mainPost : Tweet;
  mainId:  number;
  dataComments : Tweet[];
  error : HttpErrorResponse;

  constructor(private service: TweetService, private router: Router) { }

  ngOnInit(): void {
    this.getMainId();
    this.getMainPost();
    this.getComments();
  }

  getMainId(){
    this.mainId = this.service.getMainPostId();
  }

  getMainPost(){
    this.service.getMainPost(this.mainId)
      .subscribe((res) => {
        console.log(res);
        this.mainPost= res;
        this.mainPost.date = new Date(this.mainPost.date).toLocaleString();
      });
  }

  onCreateTweet(tweetText: string) {
    this.service.createComment(this.mainId, tweetText)
    .pipe(
      tap((response: Tweet) => {
          console.log(tweetText)
          this.dataComments.push(response)
          console.log(response)
      }),
      catchError((error) => {
        this.error = error;
        return of(false);
      })
    )
    .subscribe();;
  }

  getComments(){
    // window.location.reload();
    this.service.getComments(this.mainId)
      .subscribe((res) => {
        this.dataComments = res;
      });
  }

  back(){
    this.router.navigate(['home']);
  }


}