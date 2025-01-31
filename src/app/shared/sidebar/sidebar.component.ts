import { Component, OnInit } from '@angular/core';

//Servicios
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any [];

  constructor( private sidebarServices: SidebarService) { 
    this.menuItems = sidebarServices.menu;
  }

  ngOnInit(): void {
  }

}
