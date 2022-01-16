import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent{
  @Output() onCreateTweet = new EventEmitter<string>();

  createTweetForm = new FormGroup({
    text: new FormControl(''),
  });

  save() {
    if (!this.createTweetForm.valid) {
      return;
    }

    // console.log()
    const tweetText: string = this.createTweetForm.get("text")?.value

    this.onCreateTweet.emit(tweetText);
    // @ts-ignore
    this.createTweetForm.controls['text'].setValue("");
    window.location.reload();
  }

}
