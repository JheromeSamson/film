import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private http: ApiService) { }

  ngOnInit(): void {
  }

  search(): void {
   // this.http.getFilmByTitle("","",1,true);
  }


}
