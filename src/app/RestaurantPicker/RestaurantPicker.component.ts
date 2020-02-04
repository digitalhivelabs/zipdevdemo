import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../services/Restaurants.service';

@Component({
  selector: 'app-RestaurantPicker',
  templateUrl: './RestaurantPicker.component.html',
  styleUrls: ['./RestaurantPicker.component.css']
})
export class RestaurantPickerComponent implements OnInit {

  data;

  constructor(private _service: RestaurantsService) { }

  ngOnInit() {
    this._service.getRestaurantsCollections().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

}
