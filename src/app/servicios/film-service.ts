import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataFilm, RootObject } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  constructor(private _http:HttpClient) { }
  getFilms(busqueda:string){
    return new Promise<RootObject>(resolve => {
      this._http.get<RootObject>(`${environment.apiUrl}s=${busqueda}&apiKey=${environment.apiKey}`).subscribe(resp=>{
        resolve(resp);
      });
    });
  }

  getOneFilm(id:string){
    return new Promise<DataFilm>(resolve => {
      this._http.get<DataFilm>(`${environment.apiUrl}i=${id}&apiKey=${environment.apiKey}`).subscribe(resp=>{
        resolve(resp);
      });
    });
  }

}
