import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './create-event/create-event.component';

const COMPONENTS = [
  EventsComponent,
  CreateEventComponent
];

@NgModule({
  imports: [
    RouterModule, //permite navegar no sistema sem precisar dar um reload na página.
    CommonModule, //permite utilizar *ngFor *ngIf ... no component.html
    EventsRoutingModule
  ],
  declarations: [...COMPONENTS],
})
export class EventsModule { }