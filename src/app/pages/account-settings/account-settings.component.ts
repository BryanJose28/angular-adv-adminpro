import { Component, OnInit } from '@angular/core';

//Servicios
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( private SettingsService: SettingsService ) { }

  ngOnInit(): void {

    //Aqui se llama al metodo checkCurrentTheme despues de que se haga la inicializacion
    this.SettingsService.checkCurrentTheme();
  }

  //Esta clase cambiará el tema al la pagina
  changeTheme(theme: string){

    this.SettingsService.changeTheme( theme );
  }

}
