/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestaurantsService } from './Restaurants.service';

describe('Service: Restaurants', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantsService]
    });
  });

  it('should ...', inject([RestaurantsService], (service: RestaurantsService) => {
    expect(service).toBeTruthy();
  }));
});
