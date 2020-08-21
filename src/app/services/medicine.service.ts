import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from '../models/medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json').set("farmacy", "farmacy");
  private endPoint = 'http://localhost:8090/api/farmacy/medicine';

  constructor(private _http: HttpClient) { }

  getMedicines(): Observable<any> {
    return this._http.get(this.endPoint + '/all', { headers: this.headers })
  }

  createMedicine(medicine: Medicine): Observable<any> {
    let params = JSON.stringify(medicine);
    console.log(params)
    return this._http.post(this.endPoint + '/create', params, {headers : this.headers})
  }

}