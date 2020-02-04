import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private _http: HttpClient) { }

  getRestaurantsCollections() {

    const url = environment.ApiUrl + 'search?entity_id=302'; // 302 id the ID of San Diego, according to the API
    const headers = new HttpHeaders();

    const headerToSend = headers.append('user-key', environment.APIKey);

    return this._http.get(url, {headers: headerToSend});

  }


}
