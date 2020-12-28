import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

//Componentes

//Configurar las rutas de mi aplicacion
/*Cada uno de los elementos de mi routes(elementos dentro de la llave son objetos en el cual va tener el path,
  el path inicial va a ser el dashboard, luego mostrará el componente indicado). Luego se debe importar el dash.*/
const routes: Routes = [

  //path: '/dashboard' PagesRouting
  //path: '/auth' AuthRouting

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  /*este path vacio va hacer una redireccion con el redirecto al /dashboard y tambien se coloca
  el pathMatch con full: Esto ayudara a que si estoy en la ruta con el slash vacio va a redireccionar automaticamente al
  dashboard*/

  { path: '**', component: NopagefoundComponent }
  /*Aqui cualquier otro path que no este definido en los de arriba ni el espacio vacio va a mostrar el componente
  NopageFound*/
];


@NgModule({
  //Aqui se importara lo que es el RouterModule y se le va especificar las rutas principales
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
