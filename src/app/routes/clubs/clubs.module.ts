import { SharedModule } from '@shared';
import { NgModule } from '@angular/core';

import { NZ_I18N, pt_BR } from 'ng-zorro-antd';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubFormComponent } from './club-form/club-form.component';

const COMPONENTS = [
  ClubsComponent,
  ClubFormComponent
];

@NgModule({
  imports: [
    SharedModule,
    ClubsRoutingModule,
  ],
  declarations: [...COMPONENTS],
})
export class ClubsModule { }