// import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/Rx'


import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

   API_URL : string = "http://rentool.trex-studio.ru/";

   
   constructor(private http: HttpClient) {}

   public get(path) {
     var endpoint = this.API_URL + path;
      return this.http.get(endpoint);
   }

  //  public getAllCategories(): Observable<Post[]> {
  //     return this.http.get('http://rentool.trex-studio.ru/categories')
  //       .map( (data) => {
  //          let postList = [].slice.call(data);
  //          return postList.map(function(post: any){
  //            return {
  //              id: post.id,
  //              name: post.name,
  //              rootCategory: post.rootCategory,
  //              childrenCategories: post.childrenCategories,
  //              goods: post.goods,
  //              photo: post.photo,
  //              idPhoto: post.photo.id,
  //              url: post.photo.url
  //        }
  //      })
  //    });
  // }



  public getCategories(): Observable<Post[]> {
    var i = 0;
    return this.http.get('http://rentool.trex-studio.ru/categories')
          .map( (data) => {
            let postList = [].slice.call(data);
            return postList;
          });
       }

}