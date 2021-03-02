import { ViewUserService } from './../services/viewModal/view-user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss'],
})
export class UserdetailComponent implements OnInit {

viewModal: any;
  
  constructor(
    private _Activatedroute:ActivatedRoute,
    private viewUserService: ViewUserService
  ) { }

  ngOnInit() {
    const userId = +this._Activatedroute.snapshot.params['id'];
    this.viewModal = this.viewUserService.getUserDetailById(userId);
    console.log('viewModal', this.viewModal)
  }

}
