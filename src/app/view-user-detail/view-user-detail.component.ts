import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.scss'],
})
export class ViewUserDetailComponent implements OnInit {

  public users = [];
  url = 'https://fir-angular-dc1a1-default-rtdb.firebaseio.com/data.json'
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(this.url).subscribe((res) => {
      const data = res.json();
      console.log('res', data)
      //console.log('data', data)
      this.users.push(data)
    })
    console.log('users', this.users)
  }

}