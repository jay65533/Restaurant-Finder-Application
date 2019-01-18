import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router }    from '@angular/router';

@Component({
  selector: 'app-reviews-new',
  templateUrl: './reviews-new.component.html',
  styleUrls: ['./reviews-new.component.css']
})
export class ReviewsNewComponent implements OnInit {
  reviews;
  restaurant;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviews = [];
    this.restaurant = {
      id: '',
      name: '',
      
    }
    this.getReviews();
  }

  getReviews() {
    this._route.params.subscribe( (params) => {
      this.restaurant.id = params['id'];
      let observable = this._httpService.getReviews(this.restaurant.id);
      observable.subscribe( data => {
        this.restaurant = data['data']
      })
    })
  }
  
  onCommentSubmit(id, form){
    
    let restaurantRating = {
      name: form.controls['name']['value'],
      rating: form.controls['rating']['value'],
      comment: form.controls['comment']['value']
    }
    console.log(restaurantRating)
    let observable = this._httpService.addReview(id,restaurantRating);
    observable.subscribe(data => {
      console.log("Successfully added comment");
      var url = "/restaurants/" + id
      this._router.navigate([url]);
    })
    //this._router.navigate(['/restaurants/'+id]);
  }


}