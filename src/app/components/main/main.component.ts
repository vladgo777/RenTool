import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Input} from '@angular/core';

import { ApiService } from '../../services/api/api.service';
import {Category} from '../../services/Category';


import * as $ from 'jquery';
import 'magnific-popup';
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  providers: [ApiService],
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  
// category-card
categoryCardMas: any=[]
category: Category[]=[]; 

  constructor(
    public httpService: ApiService
  ) { }

  ngOnInit() {
    // this.httpService.get('/categories').subscribe(
    //   data => console.log(data));
    // this.httpService.get().subscribe(
    //   data => {
    //     data => this.categoryCardMas = data.result;
    //     console.log(data)
    //   },
    //    err => {
    //     console.log(err.message);
    //   }, () => {
    //     console.log('completed');
    //   }
    // );

    // this.httpService.get().subscribe(
    //   data => {
    //     data => this.categoryCardMas = data.result;
  	// 	  	console.log(data)
    //   }
    // );

    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
     
    });
  }

}
