import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  restRoot = 'http://localhost:4730/books';

  constructor(private http: HttpClient) { }


  getBooks() {
    const url = this.restRoot;
    return this.http.get(url);
  }
}
