import { ViewUserDetailComponent } from './../view-user-detail/view-user-detail.component';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss'],
})
export class UserdetailComponent implements OnInit {


  constructor(
    private _Activatedroute:ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
