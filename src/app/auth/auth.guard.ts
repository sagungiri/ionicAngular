import { FirebaseService } from './../services/firebase/firebase.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router, } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad {
 constructor(private firebaseService: FirebaseService,
  private router: Router){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.firebaseService.isLoggedIn){
this.router.navigateByUrl('/');
      }
    return this.firebaseService.isLoggedIn;
  }

}
