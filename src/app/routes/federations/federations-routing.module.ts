import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederationsComponent } from './federations/federations.component';
import { FederationFormComponent } from './federation-form/federation-form.component';

const routes: Routes = [
  {
    path: '',
    component: FederationsComponent,
  },
  {
    path: 'new',
    component: FederationFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederationsRoutingModule { }