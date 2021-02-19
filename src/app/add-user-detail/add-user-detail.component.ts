import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-user-detail',
  templateUrl: './add-user-detail.component.html',
  styleUrls: ['./add-user-detail.component.scss'],
})
export class AddUserDetailComponent implements OnInit {

  url = 'https://fir-angular-dc1a1-default-rtdb.firebaseio.com/data.json'
  constructor(private http: Http) { }

  ngOnInit() { }
  addUserDetailHandler(name, address, number, text) {
    this.http.post(this.url, {
      name: name,
      address: address,
      number: number,
      text: text
    }).subscribe(res => console.log(res))
  }

}
