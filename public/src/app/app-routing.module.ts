import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsNewComponent } from './restaurants/restaurants-new/restaurants-new.component';
import { RestaurantsIndexComponent } from './restaurants/restaurants-index/restaurants-index.component'
import { ReviewsIndexComponent } from './reviews/reviews-index/reviews-index.component';
import { ReviewsNewComponent } from './reviews/reviews-new/reviews-new.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/restaurants' },
  { path: 'restaurants', component: RestaurantsIndexComponent },
  { path: 'restaurants/new', component: RestaurantsNewComponent },
  { path: 'restaurants/:id', component: ReviewsIndexComponent},
  { path: 'restaurants/reviews/:id', component:ReviewsNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
