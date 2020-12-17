import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';

import { BooksService } from '../Shopping-Books/services/books.service';
import { ShopEffects } from './books.effects';
import * as BookActions from './books.actions';
// import { EffectsModule } from '@ngrx/effects';

describe('Books Effects', () => {
    let effect;
    let actions: ReplaySubject<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            HttpClientTestingModule
          ],
          providers: [
            BooksService,
            provideMockStore({}),
            ShopEffects,
            provideMockActions(() => actions)
          ],
        }).compileComponents();
        effect = TestBed.inject(ShopEffects);
    }));


    it('should call and execute addToCart method in facade', inject(
        [BooksService],
        (service: BooksService) => {
        let actions =  new ReplaySubject(1);

        const spy = spyOn(service,'getAllBooks');
        // mock the service to prevent an HTTP request
        const loadAction = {
            type: BookActions.searchbook,
            payload: {
              payload :'Angular'
            }
        };
        actions.next(loadAction);

        // subscribe to the Effect stream and verify it dispatches a SUCCESS action
        effect.loadProducts$.subscribe(result => {
           expect(BookActions.BooksLoaded).toBeCalledWith(result);
           expect(spy).toBeCalledWith('Angular');
           console.log(result);
        },err => {
            expect(BookActions.BooksLoadError).toBeCalledWith(err);
        });
    }));
});
