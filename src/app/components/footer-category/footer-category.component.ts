import { Component,Input, OnInit } from '@angular/core';

import { ApiService } from '../../services/api/api.service';
import {Category} from '../../services/Category';
@Component({
  selector: 'footer-category',
  templateUrl: './footer-category.component.html',
  providers: [ApiService],
  styleUrls: ['./footer-category.component.scss']
})
export class FooterCategoryComponent implements OnInit {
  @Input() dataGet: any ;
  
  category: Category[]=[];
  categoryCheck: Category[]=[]; 
  constructor(
    public httpService: ApiService
    ) { }

  ngOnInit() {
    //   for(let cat of this.data){
      //     if(cat.childrenCategories != null){
  //       console.log(cat.childrenCategories);
  //       this.categoryCheck.push({
  //         id: cat.id,
  //         name: cat.name,
  //         rootCategory: cat.rootCategory,
  //         childrenCategories: cat.childrenCategories,
  //         goods: cat.goods,
  //         photo: cat.photo,
  //         idPhoto: cat.photo.id,
  //         url: cat.photo.url
  //     });
  //     }
  
  //  }
  // for (let cat of )
  
        // console.log(this.data.childrenCategories.length);
    // for (let num of this.dataGet.childrenCategories){
    //   console.log(cat);
    // }
   
    this.httpService.getCategories().subscribe(
      data => {
        for (let num of this.dataGet.childrenCategories){
            for(let cat of data){
              if(cat.id == num){
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
      }
    );

  }

}
