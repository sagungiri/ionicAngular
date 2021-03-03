import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {BehaviorSubject, Observable} from 'rxjs';
import * as firebase from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  private _userData: Observable<firebase.default.User>;
  private currentUser: UserData;
  private currentUser$ = new BehaviorSubject<UserData>(null);


  constructor(public firebaseAuth: AngularFireAuth,
    private router: Router,
    private angularFirestore: AngularFirestore) {
      this._userData.subscribe(user => {
        if (user) {
          this.angularFirestore.collection<UserData>('users')
            .doc<UserData>(user.uid)
            .valueChanges()
            .subscribe(currentUser => {
              this.currentUser = currentUser;
              this.currentUser$.next(currentUser);
            });
        }
      });
     }
     CurrentUser(): Observable<UserData> {
      return this.currentUser$.asObservable();
    }
  
    async signUp(email: string, 
      password: string, 
      name: string, 
      address: string, 
      number: number, 
      text: string) {
      await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
        .then(res => {
          this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        if (res) {
          this.angularFirestore.collection('users').doc(res.user.uid)
            .set({
              email,
              name,
              address,
              number,
              text
            }).then(value => {
            this.angularFirestore.collection<UserData>('users')
              .doc<UserData>(res.user.uid)
              .valueChanges()
              .subscribe(user => {
                console.log(user);
                if (user) {
                  this.currentUser$.next(user);
                }
              });

          });
        }
        })
    }

  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
     // console.log(res);
      this._userData = this.firebaseAuth.authState;

      this.angularFirestore.collection<UserData>('users')
        .doc<UserData>(res.user.uid)
        .valueChanges()
        .subscribe((user) => {
          //console.log(user);
          this.currentUser = user;
          this.currentUser$.next(this.currentUser);
        });


    }).catch(err => console.log(err.message));
      }

  logOut() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user')
  }
}


export interface UserData {
  id?: string;
  email: string;
  name: string;
  address: string;
  number: number;
  text: string;
}