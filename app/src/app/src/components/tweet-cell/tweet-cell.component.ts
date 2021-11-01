import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-tweet-cell',
  templateUrl: './tweet-cell.component.html',
  styleUrls: ['./tweet-cell.component.scss']
})
export class TweetCellComponent implements OnInit {
  @Input() id: string = "";
  @Input() isWideModal : boolean = false;
  @Input() modalWidth: string = '';
  @Input() modalHeight: string = '';
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error("modal must have an id");
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);



    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = "block";
    document.body.classList.add("app-modal-open");
  }

  // close modal
  close(): void {
    this.element.style.display = "none";
    document.body.classList.remove("app-modal-open");
  }

}