import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-user-detail',
  templateUrl: './add-user-detail.component.html',
  styleUrls: ['./add-user-detail.component.scss'],
})
export class AddUserDetailComponent implements OnInit {
  http: Http;
  url = 'https://fir-angular-dc1a1-default-rtdb.firebaseio.com/'
  constructor() { }

  ngOnInit() { }
  addUserDetailHandler(name, address, number, text) {
    this.http.post(url,)
  }

}
