import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/administrador/dashboard',
    title: 'Dashboard',
    icon: 'dashboard',
    class: ''
  },
  {
    path: '/administrador/list-houses',
    title: 'Propiedades',
    icon: 'house',
    class: ''
  },
  {
    path: '/administrador/gasto-comun',
    title: 'Gasto Común',
    icon: 'assignment',
    class: ''
  },
  {
    path: '/administrador/calendar-events',
    title: 'Calendario de Eventos',
    icon: 'event',
    class: ''
  },
  {
    path: '/administrador/settings',
    title: 'Configuración',
    icon: 'settings',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  cerrarSession(){
    this.authService.logout();
  }
}
