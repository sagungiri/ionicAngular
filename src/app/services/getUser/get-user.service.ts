import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  private _url: any = 'https://fir-angular-dc1a1-default-rtdb.firebaseio.com/';
  constructor(private _http: Http) { }

  getUserDetailHandler() {
    return this._http.get(this._url.json)
      .pipe(map((res: Response) => console.log(res.status)))
  }
}

