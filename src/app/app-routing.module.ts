import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'medicines', loadChildren: () => import('./components/medicines/medicines.module').then(m => m.MedicinesModule) },
  { path: 'chelves', loadChildren: () => import('./components/chelves/chelves.module').then(m => m.ChelvesModule) },
  { path: 'providers', loadChildren: () => import('./components/providers/providers.module').then(m => m.ProvidersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
