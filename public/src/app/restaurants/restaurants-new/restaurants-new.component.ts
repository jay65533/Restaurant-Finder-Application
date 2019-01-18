import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-restaurants-new',
  templateUrl: './restaurants-new.component.html',
  styleUrls: ['./restaurants-new.component.css']
})
export class RestaurantsNewComponent implements OnInit {
  newRestaurant: any;
  message: any;
  error = false;
  @Output() cancel = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<boolean>();

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newRestaurant = {name: "", cuisine:""}
  }

  onSubmit() {
    let observable = this._http.addRestaurant(this.newRestaurant);
    observable.subscribe(data => {
        console.log("Got data from post back", data)
        this.message = data['message']
        if(this.message == "Restaurant with that name already exists"){
          this.error = true;
        } else {
          
        this.update.emit(false);
      }
    })
  }

  onCancel() {
    this.cancel.emit(false);
  }
}


