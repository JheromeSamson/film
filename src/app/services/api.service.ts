import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GenreRest} from "../model/dao/GenreRest";
import {Movie} from '../model/Movie';
import {SearchMovieRest} from "../model/dao/SearchMovieRest";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrlV3 = 'https://api.themoviedb.org/3/';
  private api_key = '1cffc97e85ec04428df340c2e3d0d3a8';
  private apiKeyConst = 'api_key';

  constructor(private httpClient: HttpClient) {  }

  getGenresFilm(): Observable<GenreRest>  {
    return this.httpClient.get<GenreRest>( this.baseUrlV3 + 'genre/movie/list?'+ this.apiKeyConst +'=' + this.api_key +'&language=it');
  }

  getGenresSeries() : Observable<GenreRest> {
    return this.httpClient.get<GenreRest>( this.baseUrlV3 + 'genre/tv/list?'+ this.apiKeyConst + '=' + this.api_key +'&language=it');
  }

//  getFilmByTitle(language: string, query: string, page: number, adult: boolean) : Observable<SearchMovieRest> {
  //  return this.httpClient.get(this.baseUrlV3 + 'search/movie?' this.apiKeyConst + '=' + this.api_key + '&language=' + language + 'query=' + query + '&page=' + page + '&include_adult=' + adult );
 // }

}
