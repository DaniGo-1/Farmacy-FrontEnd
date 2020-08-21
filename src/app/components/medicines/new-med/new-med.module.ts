import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMedRoutingModule } from './new-med-routing.module';
import { NewMedComponent } from './new-med.component';
import { MaterialModule } from 'src/app/material';
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [NewMedComponent],
  imports: [
    CommonModule,
    NewMedRoutingModule,
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
export class NewMedModule { }
