import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChelvesComponent } from './chelves.component';

const routes: Routes = [{ path: '', component: ChelvesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChelvesRoutingModule { }
