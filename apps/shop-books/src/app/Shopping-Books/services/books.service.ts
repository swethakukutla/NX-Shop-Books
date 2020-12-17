import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFilteredBook } from '../interfaces/books.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAllBooks(id: string) {
    // return this.http.get<{ items: IBook[] }>('https://www.googleapis.com/books/v1/volumes?q=' + id);
    return this.http.get<{ response: IFilteredBook[] }>(`http://localhost:3333/book/search/${id}`);
  }
}
