import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';
@Component({
  selector: 'app-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.scss'],
})
export class ViewUserDetailComponent implements OnInit {

  users = [];
  isLoading=false;
  @Output() isLogout = new EventEmitter<void>();

  url = 'https://fir-angular-dc1a1-default-rtdb.firebaseio.com/data.json'
  constructor(private _http: Http,
    public firebaseService: FirebaseService,
    private router: Router,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this._http.get(this.url).subscribe(res => {
      const data = res.json();
      console.log('res', data);


      for (let i in data) {
        console.log(i);
        if (data.hasOwnProperty(i)) {
          console.log('Key is: ' + i + '. Value is: ' + data[i]);
          this.users.push(data[i]);
        }
      }
    });
    console.log('users', this.users);
  }
  logout = () => {
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