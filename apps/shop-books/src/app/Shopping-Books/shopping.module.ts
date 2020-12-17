import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from '../material.module';
import { ShoppingRoutingModule } from './shopping-routing.module';

@NgModule({
  imports: [ FlexLayoutModule, FormsModule, ReactiveFormsModule,
     ShoppingRoutingModule, AppMaterialModule],
})
export class ShoppingModule {}
