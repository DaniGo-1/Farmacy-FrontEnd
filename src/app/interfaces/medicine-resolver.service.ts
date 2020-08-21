import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MedicineService } from '../services/medicine.service';
import { empty } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicineResolverService implements Resolve<any>{

  constructor(private _medicineService: MedicineService) { }

  resolve() {
    return this._medicineService.getMedicines().pipe(
      retry(2),
      catchError((error) => {
        console.log(error, 'Error resolver Medicine')
        return empty();
      })
    )
  }
}
