import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PurchasedialogueboxComponent } from './purchasedialoguebox.component';

const purchaseRoutes: Routes = [
  { path: '', component: PurchasedialogueboxComponent }
];

@NgModule({
  declarations: [
    PurchasedialogueboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(purchaseRoutes)
  ],
})
export class PurchasedialogueboxModule { }
