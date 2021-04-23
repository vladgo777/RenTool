// import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'


import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

   API_URL : string = environment.token_auth_config.apiBase;

   
   constructor(private http: HttpClient) {}

   public get() {
     // var endpoint = this.API_URL + path;
     var endpoint = "http://rentool.trex-studio.ru/categories";
     console.log('1');

      return this.http.get(endpoint);
   }

   public getAllCategories(): Observable<Post[]> {
      return this.http.get('http://rentool.trex-studio.ru/categories')
        .map( (data) => {
           let postList = [].slice.call(data);
           return postList.map(function(post: any){
             return {
               id: post.id,
               name: post.name,
               rootCategory: post.rootCategory,
               childrenCategories: post.childrenCategories,
               goods: post.goods,
               photo: post.photo,
               idPhoto: post.photo.id,
               url: post.photo.url
         }
       })
     });
}


}