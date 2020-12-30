import { Component, OnInit } from '@angular/core';

//Servicios
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private settingsServices: SettingsService ) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
