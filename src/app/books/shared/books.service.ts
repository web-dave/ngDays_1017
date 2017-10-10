import { restroot } from '../../../environments/environment';
import { IBook } from './custom-types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  restRoot = restroot;

  constructor(private http: HttpClient) { }


  getBook(isbn) {
    return this.http.get<IBook>(`${this.restRoot}${isbn}`);
  }

  getBooks() {
    return this.http.get<IBook[]>(this.restRoot);
  }
}
