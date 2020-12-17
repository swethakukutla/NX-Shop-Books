import { Action, createReducer, on, State } from '@ngrx/store';
import * as Books from './books.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IFilteredBook } from '../Shopping-Books/interfaces/books.interface';

export interface BooksState extends EntityState<IFilteredBook>{
  cartItems: [] | null;
  collectionItems: [];
}

export const bookAdapter: EntityAdapter<IFilteredBook> = createEntityAdapter<IFilteredBook>({});

export const initialState: BooksState = bookAdapter.getInitialState({
  loaded: false,
  cartItems: [],
  collectionItems: []
});

export const booksReducer = createReducer(
  initialState,
  on(Books.searchbook, (state, { payload }) => {
    return Object.assign({...state,
      loaded: true,
      searchKey: payload})
  }),
  on(Books.BooksLoaded, (state, { payload }) => {
      return bookAdapter.addMany(payload, state);
  }),

   on(Books.AddToCart, (state, { payload }) => {
     return Object.assign({
     ...state,
     cartItems: [...state.cartItems, payload]})
    }),

   on(Books.RemoveFromCart, (state, { payload}) => ({
     ...state,
     cartItems: state.cartItems.filter(i => i.id !== payload)
   })
   ),

   on(Books.AddBooksToCollection, (state, {payload}) => {
    return Object.assign({
    ...state,
    collectionItems: [...state.collectionItems, ...payload]})
   })
)

export function reducer(state: BooksState | undefined, action: Action){
    return booksReducer(state, action);
}

export const getCartItems = (state: BooksState) => state.cartItems;
export const getCollectionItems = (state: BooksState) => state.collectionItems;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = bookAdapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;
