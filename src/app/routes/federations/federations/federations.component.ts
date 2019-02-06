import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { tap, map } from 'rxjs/operators';
import { STComponent, STColumn, STData, STChange } from '@delon/abc';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Federation } from './../../../models/federation';


/*
  Parâmetros de federations:
  -id: number;
  -uf: number;
  -name: string;
  -initials: string;
  -logo_url?: string;

  Criar um model 'federation' na pasta model;

  AINDA NÃO ESTÁ PRONTO! MODIFICAR DE ACORDO COM OS PARÂMETROS DO MODEL FEDERATION ACIMA
*/

@Component({
  selector: 'app-federations',
  templateUrl: './federations.component.html',
  styleUrls: ['./federations.component.scss']
})
export class FederationsComponent implements OnInit {
  q: any = {
    pi: 1,
    ps: 10,
    sorter: '',
    status: null,
    statusList: [],
  };
  federations: Federation[]; //change for type Federations LEMBRAR DE MUDAR OS NOMES DAS VARIÁVEIS
  data: any[] = [];
  loading = false;
  status = [
    { index: 0, text: '关闭', value: false, type: 'default', checked: false },
    {
      index: 1,
      text: '运行中',
      value: false,
      type: 'processing',
      checked: false,
    },
    { index: 2, text: '已上线', value: false, type: 'success', checked: false },
    { index: 3, text: '异常', value: false, type: 'error', checked: false },
  ];

  @ViewChild('st')
  st: STComponent;
  columns: STColumn[] = [
    { title: 'Id', index: 'no' },
    { title: 'Federação', index: 'description' },
    {title: 'Sigla', index: 'description'},
    {
      title: 'UF',
      index: 'callNo',
      type: 'number',
      format: (item: any) => `${item.callNo} R$`,
      sorter: (a: any, b: any) => a.callNo - b.callNo,
    },
    
    {
      title: 'Ações',
      buttons: [
        {
          text: 'Alterar',
          click: (item: any) => this.msg.success(`${item.no} Alterado com sucesso!`),
        },
        {
          text: 'Deletar',
          click: (item: any) => this.msg.success(`${item.no} Removido com sucesso! `),
        },
      ],
    },
  ];
  selectedRows: STData[] = [];
  description = '';
  totalCallNo = 0;
  expandForm = false;

  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private cdr: ChangeDetectorRef,

    //private federationService: FederationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.q.statusList = this.status.filter(w => w.checked).map(item => item.index);
    if (this.q.status !== null && this.q.status > -1)
      this.q.statusList.push(this.q.status);
    this.http
      .get('/rule', this.q)
      .pipe(
        map((list: any[]) =>
          list.map(i => {
            const statusItem = this.status[i.status];
            i.statusText = statusItem.text;
            i.statusType = statusItem.type;
            return i;
          }),
        ),
        tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        this.data = res;
        this.cdr.detectChanges();
      });
  }

  stChange(e: STChange) {
    switch (e.type) {
      case 'checkbox':
        this.selectedRows = e.checkbox;
        this.totalCallNo = this.selectedRows.reduce((total, cv) => total + cv.callNo, 0);
        this.cdr.detectChanges();
        break;
      case 'filter':
        this.getData();
        break;
    }
  }

  remove() {
    this.http
      .delete('/rule', { nos: this.selectedRows.map(i => i.no).join(',') })
      .subscribe(() => {
        this.getData();
        this.st.clearCheck();
      });
  }

  approval() {
    this.msg.success(`审批了 ${this.selectedRows.length} 笔`);
  }

  add(tpl: TemplateRef<{}>) {
    this.modalSrv.create({
      nzTitle: '新建规则',
      nzContent: tpl,
      nzOnOk: () => {
        this.loading = true;
        this.http
          .post('/rule', { description: this.description })
          .subscribe(() => this.getData());
      },
    });
  }

  reset() {
    // wait form reset updated finished
    setTimeout(() => this.getData());
  }

  // Implementar o FederationService

  deleteFederation(): void {
    /*this.clubService.delete(club.id)
      .subscribe(data => {
        this.clubs = this.clubs.filter(u => u !== club);
      })*/
  };

  editFederation(): void {
    this.router.navigate(['edit']);
  };

  addFederation(): void {
    this.router.navigate(['new']);
  };
}
