// import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

   API_URL : string = environment.token_auth_config.apiBase;

   
   constructor(private http: HttpClient) {}

   public get(path) {
      // console.log(path)
      var endpoint = this.API_URL + path;
    return this.http.get(endpoint);
   }
}
