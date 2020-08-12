import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Sw1Component } from './componentes/sw1/sw1.component';

import { HttpClientModule } from '@angular/common/http';

import {ServicioService} from './servicio.service';
import {ServicioColombiaService} from './servicios/servicio-colombia.service';


import { Sw2Component } from './componentes/sw2/sw2.component';
import { Sw3Component } from './componentes/sw3/sw3.component';
import { Sw4Component } from './componentes/sw4/sw4.component';


@NgModule({
  declarations: [
    AppComponent,
    Sw1Component,
    Sw2Component,
    Sw3Component,
    Sw4Component,

  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ServicioService,
    ServicioColombiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
