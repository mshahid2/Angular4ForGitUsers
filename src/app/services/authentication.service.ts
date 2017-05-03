import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  validateUserinDB(url): Observable<any> {
    return this.http.get(url).map(
      res => 
      {
        const data = res.json();
        // console.log(data);
        return data;
      }
    )
  }

}
