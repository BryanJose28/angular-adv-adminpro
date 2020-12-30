import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {

    /*Aqui leera el tema, pero esto puede venir vacio asi que se establecerá un color o url por defecto que va aser la ruta con
    el color morado*/
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';

    //AQuí se cambia el atributo para que cambie el tema
    this.linkTheme.setAttribute('href', url);

   }

     //Esta clase cambiará el tema al la pagina
  changeTheme(theme: string){

    const url = `./assets/css/colors/${ theme }.css`;
 
    //AQuí se cambia el atributo para que cambie el tema
    this.linkTheme.setAttribute('href', url);
 
    //Grabar referencia en localStorage para que el tema no se reinicie
    //lo que se grabe en localStorage tiene que ser informacion no sensible porque queda abierta al publico
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
   }

   checkCurrentTheme(){

    const links = document.querySelectorAll('.selector');

    /*El forEach va a barrer cada uno de esos elementos y me va exponer el elemento html,
    este es el elemento html de forma individual todos los elementos se va a obtener de manera
    individual en "elem" y se va a barrer uno por uno*/
    links.forEach( elem => {

      //Aqui se borrará la clase working por si acaso la tuviera
      elem.classList.remove('working');
      
      //Aqui se obtendrá el atributo de la clase data-theme
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`
      //si en href coincide el codigo de btnThemeUrl al elem significa que debo ponerle la clase working
      const currentTheme = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme){
        elem.classList.add('working');
      }

    });

  }
}
