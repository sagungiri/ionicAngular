import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-detail',
  templateUrl: './add-user-detail.component.html',
  styleUrls: ['./add-user-detail.component.scss'],
})
export class AddUserDetailComponent implements OnInit {

  url = 'https://fir-angular-dc1a1-default-rtdb.firebaseio.com/data.json'
  constructor(private http: Http,
    private router: Router) {
  }

  ngOnInit() {

  }

  addUserDetailHandler(name, address, number, text) {
    if (name.length == '' && address.length == '' && number.length < 5) {
      return false;
    }
    else {
      this.http.post(this.url, {
        name: name,
        address: address,
        number: number,
        text: text
      }).subscribe(res => console.log(res));
      this.router.navigateByUrl('/viewuser');
    }
  }

}
