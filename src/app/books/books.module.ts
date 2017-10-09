import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksService } from './shared/books.service';
import { BookPreviewComponent } from './book-preview/book-preview.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule
  ],
  declarations: [BooksComponent, BookListComponent, BookPreviewComponent],
  providers: [BooksService]
})
export class BooksModule { }
