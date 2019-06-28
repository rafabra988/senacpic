import { NgModule } from "@angular/core";
import { FotoComponent } from './foto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations:[
        FotoComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule
    ],
    exports: [
        FotoComponent
    ]
})
export class FotoModule{
    
    
}