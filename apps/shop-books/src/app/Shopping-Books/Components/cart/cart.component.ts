import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { IFilteredBook } from '../../interfaces/books.interface';
import { BooksFacade } from '../../../store/books.fascade';

@Component({
  selector: 'shopping-books-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartBooks$: Observable<IFilteredBook[]>;

  constructor(private router: Router, private bookFacade: BooksFacade) {}

  ngOnInit(): void {
    this.cartBooks$ = this.bookFacade.cartBooks$;
  }
  goToBillingPage(): void {
    this.router.navigate(['/billingpage'])
  }

  removeFromCart(id: string): void {
    this.bookFacade.removedBook(id);
  }
}
