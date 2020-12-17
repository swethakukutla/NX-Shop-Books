import {Component, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'shopping-books-purchasedialoguebox',
  templateUrl: './purchasedialoguebox.component.html',
  styleUrls: ['./purchasedialoguebox.component.css']
})
export class PurchasedialogueboxComponent {

  constructor(
    public dialogRef: MatDialogRef<PurchasedialogueboxComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
