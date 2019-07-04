import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FotoRegistroComponent } from '../foto-registro/foto-registro.component';

@NgModule({
    declarations:[
        SigninComponent,
        HomeComponent,
        FotoRegistroComponent
    ],
    
    imports:[
        CommonModule,
        ReactiveFormsModule
    ] 
})

export class HomeModule { }