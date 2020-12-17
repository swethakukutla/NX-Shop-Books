import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppMaterialModule } from '../../../material.module';
import { CartComponent } from './cart.component';
import { BookListModule } from '../book-list/book-list.module';

const cartRoutes: Routes = [
  { path: '', component: CartComponent }
];

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    BookListModule,
    RouterModule.forChild(cartRoutes)
  ]
})
export class CartModule { }
