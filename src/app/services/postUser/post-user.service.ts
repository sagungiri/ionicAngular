import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class PostUserService {

  constructor(private _http: Http) { }

}
