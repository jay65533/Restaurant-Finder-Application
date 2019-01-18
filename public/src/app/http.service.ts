import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getRestaurants() {
    return this._http.get('/restaurants')
  }

  addRestaurant(newRestaurant) {
    return this._http.post('/restaurants', newRestaurant)
  }

  getOneRestaurant(id) {
    return this._http.get('/restaurants'+id)
  }

  getReviews(id) {
    return this._http.get('/restaurants/'+id)
  }

  addReview(id, review) {
    return this._http.post('/restaurants/reviews/'+id, review)
  }

  deleteRestaurant(id){
    return this._http.delete('/restaurants/'+id)
  }


  deleteReview(id, restaurantId) {
    return this._http.delete('/restaurants/reviews/' + id, restaurantId);
  }

  editTask(id, edittedTask){
    return this._http.post('/update/' + id , edittedTask)
  }

}
