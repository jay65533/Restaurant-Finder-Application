import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderModule } from 'ngx-order-pipe';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RestaurantsNewComponent } from './restaurants/restaurants-new/restaurants-new.component';
import { RestaurantsIndexComponent } from './restaurants/restaurants-index/restaurants-index.component';
import { ReviewsNewComponent } from './reviews/reviews-new/reviews-new.component';
import { ReviewsIndexComponent } from './reviews/reviews-index/reviews-index.component';
//import { RestaurantsEditComponent } from './restaurants/restaurants-edit/restaurants-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    ReviewsComponent,
    RestaurantsNewComponent,
    RestaurantsIndexComponent,
    ReviewsNewComponent,
    ReviewsIndexComponent,
    //RestaurantsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
