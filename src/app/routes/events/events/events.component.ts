import { Component, OnInit } from '@angular/core';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  text: string;
  button: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: 'new',
    title: 'Cadastrar Evento',
    icon: 'pe-7s-graph',
    text: 'Cadastre eventos para que os atletas possam se inscrever e participar',
    button: 'Cadastrar',
    class: 'btn btn-primary'
  },

  //exemplo
  {
    path: 'update',
    title: 'Alterar Evento',
    icon: 'pe-7s-graph',
    text: 'Altere informações de eventos',
    button: 'Alterar',
    class: 'btn btn-primary'
  },
];
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
