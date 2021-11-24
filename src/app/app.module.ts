import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarImgComponent } from './car-img/car-img.component';
import { CircuitosComponent } from './circuitos/circuitos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarImgComponent,
    CircuitosComponent,
    FormularioComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
