import { SharedModule } from '@shared';
import { NgModule } from '@angular/core';

import { FederationsRoutingModule } from './federations-routing.module';
import { FederationsComponent } from './federations/federations.component';
import { FederationFormComponent } from './federation-form/federation-form.component';


const COMPONENTS = [
 FederationsComponent,
 FederationFormComponent
];

@NgModule({
  imports: [
   SharedModule,    
   FederationsRoutingModule, 
  ],
  declarations: [...COMPONENTS],
})
export class FederationsModule { }