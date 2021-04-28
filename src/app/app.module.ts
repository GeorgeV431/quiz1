import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VistaCardComponent } from './vista-card/vista-card.component';
import { ListaComponent } from './lista/lista.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VistaCardComponent,
    ListaComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
