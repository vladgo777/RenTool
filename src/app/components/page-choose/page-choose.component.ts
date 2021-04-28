import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api/api.service';
import {Category} from '../../services/Category';
@Component({
  selector: 'page-choose',
  templateUrl: './page-choose.component.html',
  providers: [ApiService],
  styleUrls: ['./page-choose.component.scss']
})
export class PageChooseComponent implements OnInit {
// @Input() data: any;
idGet: any;
categoryMain: Category[]=[]; 
category: Category[]=[]; 


constructor(
  private route: ActivatedRoute,
  public httpService: ApiService
) { }

ngOnInit() {
  this.route.params.subscribe(params => {
    this.idGet = params;
  });
  
  console.log(this.idGet.id)
  this.httpService.getCategories().subscribe(
    data => {
      for(let cat of data){
        if (cat.id == this.idGet.id){
          if(cat.rootCategory == null){
            for (let num of cat.childrenCategories){
              for(let cat2 of data){
                if(cat2.id == num){
                  this.category.push({
                    id: cat2.id,
                    name: cat2.name,
                    rootCategory: cat2.rootCategory,
                    childrenCategories: cat2.childrenCategories,
                    goods: cat2.goods,
                    photo: cat2.photo,
                    idPhoto: cat2.photo.id,
                    url: cat2.photo.url
                });
                }        
              }
            }
          } 
          else{
            console.log("goods");
          }
        }
     }
    }
  );

  


}
  // ngOnInit() {
  //   if(this.data == null){
  //     console.log("null");
  //   }
  // }

}
