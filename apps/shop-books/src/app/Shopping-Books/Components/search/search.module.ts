import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppMaterialModule } from '../../../material.module';
import { BookListModule } from '../book-list/book-list.module';
import { SearchComponent } from './search.component';

const searchRoutes: Routes = [
  { path: '', component: SearchComponent }
];

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    AppMaterialModule,
    BookListModule,
    RouterModule.forChild(searchRoutes)
  ]
})
export class SearchModule { }
