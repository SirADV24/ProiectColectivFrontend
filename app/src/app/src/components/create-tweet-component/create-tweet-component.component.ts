import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-tweet-component',
  templateUrl: './create-tweet-component.component.html',
  styleUrls: ['./create-tweet-component.component.scss'],
})
export class CreateTweetComponentComponent {
  @Output() onCreateTweet = new EventEmitter<string>();

  createTweetForm = new FormGroup({
    text: new FormControl('', [Validators.required]),
  });

  save() {
    if (!this.createTweetForm.valid) {
      return;
    }

    const tweetText: string = this.createTweetForm.get("text")?.value

    console.log(tweetText);

    this.onCreateTweet.emit(tweetText);
    // @ts-ignore
    this.createTweetForm.controls['text'].setValue("")
  }
}
