import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  //Todos estos decoradores estan pasando valores del padre dona al hijo grafica1
  @Input() title: string = 'sin titulo';

  @Input('labels') public doughnutChartLabels: Label[] = ['Poleras', 'Pantalones', 'Jerseys'];
  @Input('data') public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];

  //Esto cambia el color del gráfico
  @Input('color') public colors: Color [] = [
    {backgroundColor: ['#6857E6','#009FEE','#F02059']}
  ];

}
