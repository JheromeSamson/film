import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {ItemPages} from '../../model/ItemPages';
import {Genre} from "../../model/Genre";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  genresFilm : Array<Genre> = [];
  genresSeries : Array<Genre> = [];
  itemSectionToolbar: ItemPages[] = [
    {id: 0, name: 'Film'},
    {id: 1, name: 'Serie Tv'}
  ];
  constructor(private router: Router, private http: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.getGenresFilm().subscribe(data => {
      data.genres.map(row => {
        let obj = row as Genre
        let genre = new Genre(obj.id, obj.name);
        this.genresFilm.push(genre);
      });
    });

    this.http.getGenresSeries().subscribe((data => {
      data.genres.map( row => {
        let obj = row as Genre
        let genre = new Genre(obj.id, obj.name);
        this.genresSeries.push(genre);
      });
    }));
  }
}
