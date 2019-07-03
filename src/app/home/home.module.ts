import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        SigninComponent,
        HomeComponent
    ],
    
    imports:[
        CommonModule,
        ReactiveFormsModule
    ] 
})

export class HomeModule { }