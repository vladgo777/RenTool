import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Input} from '@angular/core';

import { ApiService } from '../../services/api/api.service';
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  providers: [ApiService],
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  
// category-card
categoryCardMas: any=[]

  constructor(
    public http: ApiService
  ) { }

  ngOnInit() {
    this.http.get('/categories').subscribe(
      data => {
        // for(let film of data.categories){
        //          this.categoryCardMas.push({
        //           id: film.imdbID,
        //           year: film.Year,
        //           type: film.Type,
        //           poster: film.Poster,
        //           genre: film.Genre
        //        });
        //     }
            
            console.log(data);
          });
  }

}
