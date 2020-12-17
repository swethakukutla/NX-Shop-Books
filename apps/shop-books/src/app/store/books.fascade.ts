import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { booksQuery } from './books.selector';
import { searchbook, RemoveFromCart, AddToCart, AddBooksToCollection } from './books.actions';
import { IFilteredBook } from '../Shopping-Books/interfaces/books.interface';

@Injectable()
export class BooksFacade{
  constructor(private store: Store){}

  allBooks$ = this.store.pipe(select(booksQuery.getAllBooks)) as Observable<IFilteredBook[]>;
  selectedBooks$ = this.store.pipe(select(booksQuery.getSelectedBookId));
  cartBooks$ = this.store.pipe(select(booksQuery.getCartBooks)) as Observable<IFilteredBook[]>;
  collectionBooks$ = this.store.pipe(select(booksQuery.getCollectionBooks)) as Observable<IFilteredBook[]>;

  searchedBook(payload: string) {
    this.store.dispatch(searchbook({ payload }));
  }

  addToCart(payload: IFilteredBook) {
    this.store.dispatch(AddToCart({ payload }));
  }

  removedBook(payload: string) {
    this.store.dispatch(RemoveFromCart({ payload }));
  }

  addToCollection(payload: IFilteredBook[]) {
    this.store.dispatch(AddBooksToCollection({ payload }));
  }
}
