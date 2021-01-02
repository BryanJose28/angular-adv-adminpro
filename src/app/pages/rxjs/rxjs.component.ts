import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

//Operador
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;
  
  constructor() { 

    /*this.retornaObservable().pipe(
      retry(2) //Si quiero hacer que se repita una cierta cantidad de veces le añado un valor por ejemplo (1) para que se repita 1 vez
    ).subscribe(
      valor => console.log('subs:', valor),
      error => console.warn('Error:', error),
      () => console.info('Obs terminado')
    );*/

    this.intervalSubs = this.retornaInterval()
      .subscribe(console.log)
  }
  
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaInterval(): Observable<number> {

    return interval(300)
            .pipe(
              //take(10),
              map( valor => valor + 1),
              filter( valor => ( valor % 2 === 0 ) ? true : false ),
            );

  }

  retornaObservable(): Observable<number> {

    let i = -1;

    return new Observable<number>( observer => {

      const intervalo = setInterval( () => {

        i++;
        observer.next(i);

        if ( i === 4 ) {
          clearInterval(intervalo);
          observer.complete();
        }

        if ( i ===2 ) {
          observer.error('i llego solo al valor 2');
        }

      }, 1000)

    });

  }

}
