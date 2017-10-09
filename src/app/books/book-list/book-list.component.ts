import { BooksService } from '../shared/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
books
  constructor(private http: BooksService) { }

  ngOnInit() {
    this.http.getBooks().subscribe(b => this.books = b);
  }
  selectBook(book){
    console.log('-->', book)
  }
}
