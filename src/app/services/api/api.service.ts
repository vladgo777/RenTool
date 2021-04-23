// import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



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
}
