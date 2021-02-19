import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-sign-in-sign-up',
  templateUrl: './sign-in-sign-up.component.html',
  styleUrls: ['./sign-in-sign-up.component.scss'],
})
export class SignInSignUpComponent implements OnInit {

  title = 'authWithFirebase';
  isSignedIn = false
  constructor(public firebaseService: FirebaseService,
    private router: Router) {

  }

  toogleSignInUp: boolean = true

  ngOnInit() {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }

  forLogIn() {
    this.toogleSignInUp = true;
  }
  forRegister() {
    this.toogleSignInUp = false;
  }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signUp(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true
    this.router.navigateByUrl('/adduser');
  }
  async onSignin(email: string, password: string) {
    await this.firebaseService.signIn(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true
    this.router.navigateByUrl('/viewuser');
  }
  handleLogout() {
    this.isSignedIn = false

  }
}

