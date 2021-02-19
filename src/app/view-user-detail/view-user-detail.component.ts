import { GetUserService } from './../services/getUser/get-user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.scss'],
})
export class ViewUserDetailComponent implements OnInit {

  users = [];
  constructor(private _getUser: GetUserService) { }

  ngOnInit() {
    this._getUser.getUserDetailHandler()
    // this._getUser.getUserDetailHandler()
    //   .subscribe(resUserData => this.users = resUserData)
  }

}
