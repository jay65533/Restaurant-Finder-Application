import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-index',
  templateUrl: './restaurants-index.component.html',
  styleUrls: ['./restaurants-index.component.css']
})
export class RestaurantsIndexComponent implements OnInit {
  restaurants = [];
  should_open = false;
  should_open2 = false;
  taskId: any;
  edittedTask:any;
  show_bool = false;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getRestaurants();
    this.edittedTask = {name: "", cuisine:""}

  }

  showCreate(){
    this.should_open = true;
  }


  
  getRestaurants() {
    let observable = this._httpService.getRestaurants();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.restaurants = data['data']
    })
  }

  showEdit(restaurant){
    this.should_open2 = true;
    this.taskId = restaurant._id
    this.edittedTask = restaurant
  }

  recCancel(event){
    this.should_open = event;
    this.getRestaurants();
  }

  recUpdate(event){
    this.should_open = event;
    this.getRestaurants();
  }

  onEdit() {
    if(this.edittedTask.name.length<1) {
      this.show_bool = true;
    } else {
    console.log(this.taskId)
    let observable = this._httpService.editTask(this.taskId, this.edittedTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data)
      this.edittedTask = {name:"", cuisine:""}
      this.getRestaurants();
      this.should_open2 = false;
    
    })}
    
  }
}
