import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  text: string;
  button: string;
  class: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  styles: [
    `
      :host ::ng-deep .ant-card-meta-title {
        margin-bottom: 12px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent implements OnInit {
  list: any[] = [
    {
      id: '1',
      logo: './assets/images/fpotm.jpg',
      title: 'Estadual',
      description: '3ª Etapa do Campeonato estadual 2018',
      local: 'Natal-RN',
      data: '28/07/2018 à 29/07/2018',
      status: 'Aberto',
    },
    {
      id: '2',
      title: 'Nacional',
      description: '2ª Copa nacional - Natal - 2019',
      logo: './assets/images/fpotm.jpg',
      local: 'Natal-RN',
      data: '28/07/2018 à 29/07/2018',
      status: 'Aberto',
    },
  ];

  loading = true;

  constructor(public msg: NzMessageService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loading = false;
    this.cdr.detectChanges();
  }

}
