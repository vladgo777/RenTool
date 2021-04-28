import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api/api.service';
import {Category} from '../../services/Category';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  providers: [ApiService],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  category: Category[]=[]; 
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