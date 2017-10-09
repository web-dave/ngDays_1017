import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../shared/custom-types';
import { BooksService } from '../shared/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(private http: BooksService,
    private router: Router,
    private route: ActivatedRoute) { }

  selectBook(book: IBook) {
    this.router.navigate([book.isbn], {relativeTo: this.route});
  }

  ngOnInit() {
    this.http.getBooks().subscribe(b => this.books = b);
  }

}
