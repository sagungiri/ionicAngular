import { LoadingController } from '@ionic/angular';
import { FirebaseService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isLoading = false;
  isSignedIn=false;

  constructor(public firebaseService: FirebaseService,
    private router: Router,
    private loadingCtrl:LoadingController) { }

  
  ngOnInit() {}

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
  
  forLogIn() {
    this.router.navigateByUrl('/');
  }

}
