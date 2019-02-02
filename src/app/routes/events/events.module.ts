import { SharedModule } from '@shared';
import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CardEventComponent } from './card-event/card-event.component';

const COMPONENTS = [
  EventsComponent,
  CreateEventComponent
];

const COMPONENTS_NOROUNT = [CardEventComponent];

@NgModule({
  imports: [
   SharedModule,    
   EventsRoutingModule, 
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class EventsModule { }