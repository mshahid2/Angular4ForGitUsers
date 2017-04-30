import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) {
  }

  getUserDetail(gituserDetailAPI, userId): Observable<any> {
    const url = gituserDetailAPI + userId;
    return this.http.get(url).map(
      res => 
      {
        const result = res.json();
        return result;
      }
    )
  }
  
  getUser(gitUserAPI, searchContent): Observable<any> {
    const url = gitUserAPI + searchContent;
    return this.http.get(url).map(
      res =>
      {
        const data = res.json();
        return data;
      }
    )
  }

}
