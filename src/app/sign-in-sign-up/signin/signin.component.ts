import { LoadingController } from '@ionic/angular';
import { FirebaseService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  isSignedIn = false;
  isLoading = false;
  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    if (localStorage.getItem('user') != null) {
      this.isSignedIn = true;
      this.router.navigateByUrl('/viewuser');
    } else {
      this.isSignedIn = false;
    }
  }
  async onSignin(email: string, password: string) {
    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging In.....' })
      .then((loadingEl) => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
        }, 2000);
      });
    await this.firebaseService.signIn(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
      localStorage.setItem(email, password);
      this.router.navigateByUrl('/viewuser');
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Welcome Back',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  forRegister() {
    this.router.navigateByUrl('/signup');
  }
}
