import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFilm } from 'src/app/interfaces/interface';
import { FilmServiceService } from 'src/app/servicios/film-service';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {

  idFilm:string;
  dataFilm: DataFilm[];

  constructor(private route: ActivatedRoute, private filmService:FilmServiceService) {
   }

   async ngOnInit(): Promise<void> {
    const film = await this.filmService.getOneFilm(this.route.snapshot.paramMap.get('id'));
    this.dataFilm = [film];
  }
}
