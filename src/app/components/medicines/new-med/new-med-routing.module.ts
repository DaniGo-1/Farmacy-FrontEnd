import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMedComponent } from './new-med.component';
import { ShelfResolverService } from 'src/app/interfaces/shelf-resolver.service';
import { ProviderResolverService } from 'src/app/interfaces/provider-resolver.service';

const routes: Routes = [{ path: '', component: NewMedComponent , resolve : {shelves : ShelfResolverService, providers : ProviderResolverService}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewMedRoutingModule { }
