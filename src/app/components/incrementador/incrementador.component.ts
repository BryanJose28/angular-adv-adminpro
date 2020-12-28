import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  //Dentro de este ngOnInit concatena el btn al btnClass para evitar tener que poner btn btn-primary o btn btn-info
  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  //Puede ser @Input() progreso: number = 40; o como el codigo de abajo
  @Input('valor') progreso: number = 40;
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  @Input() btnClass: string = 'btn-primary';

  cambiarValor(valor: number){

    /*Valida si la variable progreso es mayor o igual que 100 y valor es mayor o igual que 0 luego retorna un valor 100 a la
    variable progreso*/
    if ( this.progreso >= 100 && valor >=0 ) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    /*Valida si la variable progreso es menor o igual que 0 y valor es menor que 0  luego retorna un valor 0 a la
    variable progreso*/
    if ( this.progreso <= 0 && valor <0 ) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    //En el caso que no se cumpla ninguna condición le suma valor a la variable progreso
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange( nuevoValor: number ){

    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <=0) {
      this.progreso = 0
    } else {
      this.progreso = nuevoValor;
    }
    
    this.valorSalida.emit(nuevoValor);

  }

}
