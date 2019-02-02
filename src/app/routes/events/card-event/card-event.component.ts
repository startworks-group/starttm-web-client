import { Component, OnInit, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

export class Event {
  id: string;
  logo: string;
  title: string;
  description: string;
  local: string;
  data: string;
  status: string;
}

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
})
export class CardEventComponent implements OnInit {
  @Input() item: Event;
  loading = true;

  constructor(public msg: NzMessageService) { }

  ngOnInit() {
    this.loading = false;
  }

}
