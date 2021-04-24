import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api/api.service';
import {Category} from '../../services/Category';
@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  providers: [ApiService],
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  // categoryCardMas: any=[]
  category: Category[]=[]; 
  categoryCheck: Category[]=[]; 
  constructor(
    public httpService: ApiService
  ) { }


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
