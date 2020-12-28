import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan','Refrescos','Tacos'];
  public data1 = [
    [10, 15, 40],
  ];
  public colors1 = [
    {backgroundColor: ['#DC7633','#F1C40F','#2ECC71']}
  ];



  public labels2: string[] = ['Sandías','Zanahorias','Lechugas'];
  public data2 = [
    [25, 60, 12],
  ];
  public colors2 = [
    {backgroundColor: ['#E74C3C','#6C3483','#F39C12']}
  ];



  public labels3: string[] = ['Galletas','Dulces','Regalos'];
  public data3 = [
    [28, 80, 100],
  ];
  public colors3 = [
    {backgroundColor: ['#73C6B6','#85C1E9','#2ECC71']}
  ];

  public labels4: string[] = ['Base de Datos','CSS','HTML'];
  public data4 = [
    [55, 43, 5],
  ];
  public colors4 = [
    {backgroundColor: ['#85C1E9','#F1948A','#95A5A6']}
  ];

  public labels5: string[] = ['Juego de Tronos','League of Legends','Overwatch'];
  public data5 = [
    [12, 95, 26],
  ];
  public colors5 = [
    {backgroundColor: ['#F1C40F','#DC7633','#5D6D7E']}
  ];

}
