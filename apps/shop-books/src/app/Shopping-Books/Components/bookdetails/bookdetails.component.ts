import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { IFilteredBook } from '../../interfaces/books.interface';
import { BooksFacade } from '../../../store/books.fascade';

@Component({
  selector: 'shopping-books-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
 allBooks$: Observable<IFilteredBook[]>;
 selectedBook: IFilteredBook;
 selectedBookId: string;

  constructor(private router: Router,
              private actRoute: ActivatedRoute,
              private dialog: MatDialog, private bookFacade: BooksFacade) { }

  ngOnInit(): void {
    this.allBooks$ = this.bookFacade.allBooks$;
    this.selectedBookId = this.actRoute.snapshot.params.id;
    this.allBooks$.forEach(books => {
      books.forEach(book => {
        if (book['id'] === this.selectedBookId) {
          this.selectedBook = Object.assign({}, book)
        }
      })
    })
  }

  addToCart() {
    this.bookFacade.addToCart(this.selectedBook);
  }

  goToBillingPage() {
    this.router.navigate(['/billingpage'])
  }
}

