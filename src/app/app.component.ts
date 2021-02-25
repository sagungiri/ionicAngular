import { Router } from '@angular/router';
import { FirebaseService } from './services/firebase/firebase.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  
  isLoading=false;
  @Output() isLogout = new EventEmitter<void>();

  constructor(public firebaseService: FirebaseService,
     public menuCtrl: MenuController,
     private loadingCtrl: LoadingController,
     private router: Router) { }

  ngOnInit(){
}
  toggleMenu() {
    this.menuCtrl.toggle(); 
  }
  logout = () => {
    this.menuCtrl.toggle(); 
    this.isLoading= true;
    this.loadingCtrl.create({keyboardClose:true, message:'Logging Out.....'})
    .then(loadingEl=>{
      loadingEl.present();
      setTimeout(()=>{
        this.isLoading= false;
        loadingEl.dismiss();
      }, 2000);
    })
    this.firebaseService.logOut();
    this.isLogout.emit();
    this.router.navigateByUrl('/');

  }
}
