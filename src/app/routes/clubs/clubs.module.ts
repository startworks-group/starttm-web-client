import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { NgZorroAntdModule, NZ_I18N, pt_BR } from 'ng-zorro-antd';

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
    NgZorroAntdModule,
    ClubsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [...COMPONENTS],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }]
})
export class ClubsModule { }