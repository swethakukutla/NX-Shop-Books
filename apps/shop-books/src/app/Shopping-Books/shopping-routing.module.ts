import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
    import('../Shopping-Books/Components/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'cart',
    loadChildren: () =>
    import('../Shopping-Books/Components/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'collection',
    loadChildren: () =>
    import('../Shopping-Books/Components/mycollection/mycollection.module').then(m => m.MyCollectionModule)
  },
  {
    path: 'billingpage',
    loadChildren: () =>
    import('../Shopping-Books/Components/billingpage/billingpage.module').then(m => m.BillingpageModule)
  },
  {
    path: 'bookdetails/:id',
    loadChildren: () =>
    import('../Shopping-Books/Components/bookdetails/bookdetails.module').then(m => m.BookdetailsModule)
  },
  { path: '',redirectTo: "/search",pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
