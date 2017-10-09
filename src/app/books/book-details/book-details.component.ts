import { IBook } from '../shared/custom-types';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
book: IBook;
  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute) { }


ngOnInit() {
  this.route
    .params
    .subscribe((params: {isbn: string}) => {
      this.booksService.getBook(params.isbn)
        .subscribe(b => {
          console.log('!!', b);
          this.book = b;
        });
    });
}

}
