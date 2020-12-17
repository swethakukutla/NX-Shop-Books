import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppMaterialModule } from '../../../material.module';
import { BookdetailsComponent } from './bookdetails.component';

const bookDetailsRoutes: Routes = [
  { path: '', component: BookdetailsComponent }
];

@NgModule({
  declarations: [
    BookdetailsComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(bookDetailsRoutes)
  ]
})
export class BookdetailsModule { }
