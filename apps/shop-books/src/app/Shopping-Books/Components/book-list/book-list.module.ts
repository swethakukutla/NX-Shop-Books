import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../../material.module';

import { BookListComponent } from './book-list.component';

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [BookListComponent]
})
export class BookListModule { }
