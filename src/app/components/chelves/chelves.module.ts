import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChelvesRoutingModule } from './chelves-routing.module';
import { ChelvesComponent } from './chelves.component';


@NgModule({
  declarations: [ChelvesComponent],
  imports: [
    CommonModule,
    ChelvesRoutingModule
  ]
})
export class ChelvesModule { }
