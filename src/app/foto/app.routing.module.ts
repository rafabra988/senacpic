import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FotoRegistroComponent } from '../foto-registro/foto-registro.component';

const routes:Routes = [
    {path: 'foto/form', component: FotoRegistroComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)

    ],
    exports:[
        RouterModule
    ]
})

export class RoutingModule { }