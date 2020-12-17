import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppMaterialModule } from '../../../material.module';

import { BillingpageComponent } from './billingpage.component';

const billingPageRoutes: Routes = [
  { path: '', component: BillingpageComponent }
];

@NgModule({
  declarations: [
    BillingpageComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    AppMaterialModule,
    RouterModule.forChild(billingPageRoutes)
  ]
})
export class BillingpageModule { }
