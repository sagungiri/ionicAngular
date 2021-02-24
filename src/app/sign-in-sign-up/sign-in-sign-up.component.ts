import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';
import Swal from 'sweetalert2';
import {NgForm} from '@angular/forms';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-sign-in-sign-up',
  templateUrl: './sign-in-sign-up.component.html',
  styleUrls: ['./sign-in-sign-up.component.scss'],
})
export class SignInSignUpComponent implements OnInit {

  title = 'authWithFirebase';
  isSignedIn = false;
  toogleSignInUp: boolean = true;
  isLoading=false;
  constructor(public firebaseService: FirebaseService,
    private router: Router,
    private loadingCtrl:LoadingController) {

  }

  ngOnInit() {
    if (localStorage.getItem('user') != null)
      this.isSignedIn = true;
    else
      this.isSignedIn = false;
  }

  forLogIn() {
    this.toogleSignInUp = true;
  }
  forRegister() {
    this.toogleSignInUp = false;
  }

  async onSignup(email: string, password: string) {
    this.isLoading= true;
    this.loadingCtrl.create({keyboardClose:true, message:'SigningIn.....'})
    .then(loadingEl=>{
      loadingEl.present();
      setTimeout(()=>{
        this.isLoading= false;
        loadingEl.dismiss();
      }, 2000);
    })
    await this.firebaseService.signUp(email, password);
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
    this.router.navigateByUrl('/adduser');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sucessfully Registered',
      showConfirmButton: false,
      timer: 4000
    });
  }
  async onSignin(email: string, password: string) {
    this.isLoading= true;
    this.loadingCtrl.create({keyboardClose:true, message:'Logging In.....'})
    .then(loadingEl=>{
      loadingEl.present();
      setTimeout(()=>{
        this.isLoading= false;
        loadingEl.dismiss();
      }, 2000);
    })
    await this.firebaseService.signIn(email, password);
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
    this.router.navigateByUrl('/viewuser');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Welcome Back',
      showConfirmButton: false,
      timer: 2000
    });
  }
  handleLogout() {
    this.isSignedIn = false;
  }
  onSubmit(form: NgForm){
    console.log('form')
  }
}

