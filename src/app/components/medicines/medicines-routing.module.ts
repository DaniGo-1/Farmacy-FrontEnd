import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicinesComponent } from './medicines.component';
import { MedicineResolverService } from 'src/app/interfaces/medicine-resolver.service';

const routes: Routes = [
  { path: '', component: MedicinesComponent, resolve : {medicines : MedicineResolverService} },
  { path: 'new-med', loadChildren: () => import('./new-med/new-med.module').then(m => m.NewMedModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinesRoutingModule { }
