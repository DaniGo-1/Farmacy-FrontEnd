import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinesRoutingModule } from './medicines-routing.module';
import { MedicinesComponent } from './medicines.component';
import { MaterialModule } from 'src/app/material';
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [MedicinesComponent],
  imports: [
    CommonModule,
    MedicinesRoutingModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ]
})
export class MedicinesModule { }
