import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Componentes
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

/*Como este es la ruta en la cual van a estar todas mis rutas protegidas, voy a definir las rutas hijas
aqui internamente. Para crear las rutas hijas dentro de este componente.*/
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica1', component: Grafica1Component },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
