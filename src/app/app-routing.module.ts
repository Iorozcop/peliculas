import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { FilmInfoComponent } from './components/film-info/film-info.component';

const routes: Routes = [
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'ficha',
    component: FilmInfoComponent
  },
  {
    path:'ficha/:id',
    component: FilmInfoComponent
  },
  {
    path:'**',
    redirectTo: 'inicio'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
