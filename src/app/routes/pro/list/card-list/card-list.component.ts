import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-list-card-list',
  templateUrl: './card-list.component.html',
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
export class ProCardListComponent implements OnInit {
  list: any[] = [
    {
      id: '1',
      title: 'Estadual',
      description: '3ª Etapa do Campeonato estadual 2018',
      logo: './assets/images/fpotm.jpg',
    },
    {
      id: '2',
      title: 'Nacional',
      description: '2ª Copa nacional - Natal - 2019',
      logo: './assets/images/fpotm.jpg',
    },
  ];

  loading = true;

  constructor(private http: _HttpClient, public msg: NzMessageService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loading = true;
    this.http.get('/api/list', { count: 8 }).subscribe((res: any) => {
      this.list = this.list.concat(res);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
