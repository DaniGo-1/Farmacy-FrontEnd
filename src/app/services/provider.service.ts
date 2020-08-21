import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json').set("farmacy", "farmacy");
  private endPoint = 'http://localhost:8090/api/farmacy/provider';

  constructor(private _http : HttpClient) { }

  getProviders() : Observable<any>{
    return this._http.get(this.endPoint + '/all', {headers : this.headers})
  }

}