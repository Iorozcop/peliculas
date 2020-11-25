import { Component, OnInit } from '@angular/core';
import { Film } from '../../interfaces/interface';
import { FilmServiceService } from '../../servicios/film-service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  busqueda:string;
  peliculas: Film[]=[];
  mostrar=false;
    
  constructor(private filmService:FilmServiceService) { }

  ngOnInit() {
  }

  async buscar(busqueda:string){
    if(typeof busqueda === 'string'){
      const film = await this.filmService.getFilms(busqueda);
      this.peliculas = film.Search;
      this.mostrar=true;
    }
  }
}


