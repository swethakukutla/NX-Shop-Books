import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as booksreducer from './books.reducer';

export interface BooksState {
  books: booksreducer.BooksState;
}

export const reducers: ActionReducerMap<BooksState> = {
  books: booksreducer.reducer
}

export const selectFeature = createFeatureSelector<booksreducer.BooksState>('books');

export const getAllBooks = createSelector(selectFeature, booksreducer.selectAllUsers);
export const getSelectedBookId = createSelector(selectFeature, booksreducer.selectUserIds );
export const getCartBooks = createSelector(selectFeature, booksreducer.getCartItems);
export const getCollectionBooks = createSelector(selectFeature, booksreducer.getCollectionItems);

export const booksQuery = {
  getAllBooks,
  getSelectedBookId,
  getCartBooks,
  getCollectionBooks
}
