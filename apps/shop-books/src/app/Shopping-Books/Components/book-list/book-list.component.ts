import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilteredBook } from '../../interfaces/books.interface';

@Component({
  selector: 'shopping-books-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() book: IFilteredBook;
  @Input() pageSelector: 'search' | 'cart' | 'collection';
  @Output() emitSelectedBookId = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void { }

  selectedBookId(id: string) {
    this.emitSelectedBookId.emit(id);
  }
}
