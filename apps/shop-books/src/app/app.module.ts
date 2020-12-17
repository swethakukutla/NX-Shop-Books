import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import * as BooksReducer  from './store/books.reducer';
import { ShopEffects } from './store/books.effects';
import { BooksFacade } from './store/books.fascade';

import { AppMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { ShoppingModule } from './Shopping-Books/shopping.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlexLayoutModule, StoreModule.forRoot({books: BooksReducer.reducer}),
    EffectsModule.forRoot([ShopEffects]),StoreDevtoolsModule.instrument({ name: 'mybook' }),
    NoopAnimationsModule, AppRoutingModule, AppMaterialModule, HttpClientModule,
    FormsModule, ShoppingModule],
  providers: [BooksFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
