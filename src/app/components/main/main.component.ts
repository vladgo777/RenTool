import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

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

  ngOnInit(){}
  // ngAfterViewInit():void {
  //     $('.image-popup-vertical-fit').magnificPopup({
  //       type: 'image'      
      
  //     });
  // }

}
