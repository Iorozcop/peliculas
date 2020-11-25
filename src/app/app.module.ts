import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'; 
import {PanelModule} from 'primeng/panel';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilmInfoComponent } from './components/film-info/film-info.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './components/cabecera/cabecera.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FilmInfoComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    TableModule,
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
