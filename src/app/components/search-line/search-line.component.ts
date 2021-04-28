import { Component, OnInit,Input } from '@angular/core';

import { ApiService } from '../../services/api/api.service';
import {Category} from '../../services/Category';
@Component({
  selector: 'search-line',
  templateUrl: './search-line.component.html',
  styleUrls: ['./search-line.component.scss']
})
export class SearchLineComponent implements OnInit {

  @Input() dataGet: any ;
  
  category: Category[]=[];
  categoryCheck: Category[]=[]; 
  constructor(
    public httpService: ApiService
  ){};

  ngOnInit() {
    this.httpService.getCategories().subscribe(
      data => {
        for(let cat of data){
          if(cat.rootCategory == null){
            this.category.push({
              id: cat.id,
              name: cat.name,
              rootCategory: cat.rootCategory,
              childrenCategories: cat.childrenCategories,
              goods: cat.goods,
              photo: cat.photo,
              idPhoto: cat.photo.id,
              url: cat.photo.url
          });
          }        
       }
       
      }
    );

    


  }
}
