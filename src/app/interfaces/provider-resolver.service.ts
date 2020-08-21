import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProviderService } from '../services/provider.service';
import { retry, catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderResolverService implements Resolve<any> {

  constructor(private provider_service: ProviderService) { }

  resolve() {
    return this.provider_service.getProviders().pipe(
      retry(2),
      catchError((error) => {
        console.log(error, "Error en el resolver Provider")
        return empty();
      })
    )
  }
}
