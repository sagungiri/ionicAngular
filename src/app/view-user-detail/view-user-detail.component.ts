import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.scss'],
})
export class ViewUserDetailComponent implements OnInit {

  users = [];
//showModal=false;

  url = 'https://fir-angular-dc1a1-default-rtdb.firebaseio.com/data.json'
  constructor(private _http: Http,
    private router:Router) { }

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

  listDetail(i){
    console.log(i)

    //console.log(this.users[i])
    // if(this.users[i]){
    //   this.showModal=true;
    // }
   
  }
}