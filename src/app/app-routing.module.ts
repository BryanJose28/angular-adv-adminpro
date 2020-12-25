import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

//Configurar las rutas de mi aplicacion
/*Cada uno de los elementos de mi routes(elementos dentro de la llave son objetos en el cual va tener el path,
  el path inicial va a ser el dashboard, luego mostrará el componente indicado). Luego se debe importar el dash.*/
const routes: Routes = [
  /*Como este es la ruta en la cual van a estar todas mis rutas protegidas, voy a definir las rutas hijas
  aqui internamente. Para crear las rutas hijas dentro de este componente hay varias formas, este sera el
  inicio luego se hara de otra manera*/
  {
    path: '',
    component:PagesComponent,
    children: [
      {path: 'dashboard', component:DashboardComponent},
      {path: 'progress', component:ProgressComponent},
      {path: 'grafica1', component:Grafica1Component},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      /*este path vacio va hacer una redireccion con el redirecto al /dashboard y tambien se coloca
      el pathMatch con full: Esto ayudara a que si estoy en la ruta con el slash vacio va a redireccionar automaticamente al
      dashboard*/
    ]
  },

  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},

  {path: '**', component:NopagefoundComponent}
  /*Aqui cualquier otro path que no este definido en los de arriba ni el espacio vacio va a mostrar el componente
  NopageFound*/
];


@NgModule({
  declarations: [],
  //Aqui se importara lo que es el RouterModule y se le va especificar las rutas principales
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
