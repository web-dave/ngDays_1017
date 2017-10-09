import { IBook } from './custom-types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  restRoot = 'http://localhost:4730/books';

  constructor(private http: HttpClient) { }


  getBook(isbn) {
    const url = this.restRoot;
    return this.http.get<IBook>(`${url}/${isbn}`);
  }

  getBooks() {
    const url = this.restRoot;
    return this.http.get<IBook[]>(url);
  }
}
