import { Routes } from '@angular/router';
import { DetailesComponent } from './detailes/detailes.component';
import { IndetailesComponent } from './indetailes/indetailes.component';


export const routes: Routes = [
    {
path: "detailes",
component: DetailesComponent,
children:[{
    path:"indetailes",
    component : IndetailesComponent,}
]
},

];
