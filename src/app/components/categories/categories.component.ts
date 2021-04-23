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
  constructor(
    public httpService: ApiService
  ) { }


  ngOnInit() {
    this.httpService.getAllCategories().subscribe(
      data => {
        // this.category = data;  
        if (data['name'] == null ){
          this.category = data; 
        }
              
      }
    );

    


  }

}
