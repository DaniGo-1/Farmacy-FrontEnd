import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShelfService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json').set("farmacy", "farmacy");
  private endPoint = 'http://localhost:8090/api/farmacy/shelf';

  constructor(private _http : HttpClient) { }

  getShelves() : Observable<any>{
    return this._http.get(this.endPoint + '/all', {headers : this.headers});
  }
  
}