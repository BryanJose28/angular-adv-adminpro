import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any [] = [
    {
      titulo: 'Tablero',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Tablero', url: '/' },
        { titulo: 'Barra de Progreso', url: 'progress' },
        { titulo: 'Gráficas', url: 'grafica1' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'Rxjs', url: 'rxjs' },
      ]
    }
  ];

  constructor() { }
}
