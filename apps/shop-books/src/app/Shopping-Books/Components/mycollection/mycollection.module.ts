import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppMaterialModule } from '../../../material.module';
import { MycollectionComponent } from './mycollection.component';
import { BookListModule } from '../book-list/book-list.module';

const myCollectionRoutes: Routes = [
  { path: '', component: MycollectionComponent }
];

@NgModule({
  declarations: [
    MycollectionComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    BookListModule,
    RouterModule.forChild(myCollectionRoutes)
  ]
})
export class MyCollectionModule { }
