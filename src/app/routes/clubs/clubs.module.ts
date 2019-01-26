import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubFormComponent } from './club-form/club-form.component';

const COMPONENTS = [
  ClubsComponent,
  ClubFormComponent
];

@NgModule({
  imports: [
    RouterModule, //permite navegar no sistema sem precisar dar um reload na página.
    CommonModule, //permite utilizar *ngFor *ngIf ... no component.html
    ClubsRoutingModule
  ],
  declarations: [...COMPONENTS],
})
export class ClubsModule { }