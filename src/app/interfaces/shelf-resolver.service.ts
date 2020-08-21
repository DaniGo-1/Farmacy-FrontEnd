import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ShelfService } from '../services/shelf.service';
import { retry, catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShelfResolverService implements Resolve<any> {

  constructor(private shelf_service: ShelfService) { }

  resolve() {
    return this.shelf_service.getShelves().pipe(
      retry(2),
      catchError((error) => {
        console.log(error, "Error en el resolver Shelf");
        return empty();
      })
    )
  }
}
