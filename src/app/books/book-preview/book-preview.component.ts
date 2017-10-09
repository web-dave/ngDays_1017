import { OutletContext } from '@angular/router';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit, OnChanges {
  @Input() book;
  @Output() bookselected = new EventEmitter();

  constructor() { }
  selectThisBook() {
    this.bookselected.emit(this.book);
  }
  ngOnInit() {
  }
  ngOnChanges(changes){
    console.log(changes);
  }

}
