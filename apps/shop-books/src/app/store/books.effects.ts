import { Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as LoadBooks from './books.actions';
import { BooksService } from '../Shopping-Books/services/books.service';

@Injectable()
export class ShopEffects {
 constructor(private actions$: Actions, private bookService: BooksService){}

loadBooks$ = createEffect(() =>
  this.actions$.pipe(
    ofType(LoadBooks.searchbook),
    mergeMap((action$) =>
      this.bookService.getAllBooks(action$.payload).pipe(
        map((responseData) =>
          LoadBooks.BooksLoaded({payload: responseData.response})
        ),
      catchError(error =>
        of(LoadBooks.BooksLoadError({error}))
      )
      )
)))
}

