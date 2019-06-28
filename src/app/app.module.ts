import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { FotoRegistroComponent } from './foto-registro/foto-registro.component';
import { RouterModule, Router, ROUTES } from '@angular/router';
import { RoutingModule } from './foto/app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FotoRegistroComponent,
    
  ],
  imports: [
    BrowserModule,
    FotoModule,
    RoutingModule    
    
  ],
  //prover um recurso
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
