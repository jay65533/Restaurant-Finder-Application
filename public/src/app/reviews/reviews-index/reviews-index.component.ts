import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core'
@Component({
  selector: 'app-reviews-index',
  templateUrl: './reviews-index.component.html',
  styleUrls: ['./reviews-index.component.css']
})

export class ReviewsIndexComponent implements OnInit {
  restaurant: any;
  reviews: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.restaurant = {
      id: '',
      name: '',
      cuisine:''
    }
    this.getReviews();
  }

  getReviews() {
    this._route.params.subscribe( (params) => {
      this.restaurant.id = params['id'];
      let observable = this._httpService.getReviews(this.restaurant.id);
      observable.subscribe( data => {
        this.restaurant = data['data']
        console.log(this.restaurant)
        console.log("Got here")
        console.log(this.restaurant)
      })
    })
  }

  deleteRestaurant(id) {
    let observable = this._httpService.deleteRestaurant(id);
    observable.subscribe( data => {
      console.log("Successfully deleted Restaurant")
      this._router.navigate(['/restaurants']);
    })
    
  }

  deleteReview(id) {
    var restaurantId = this._route.snapshot.params.id
    console.log(restaurantId)
    console.log(id)
    let observable = this._httpService.deleteReview(id, restaurantId);
    observable.subscribe( data => {

      console.log("Successfully deleted Review")
      this._router.navigate(['/restaurants']);
    })
    
  }
}
