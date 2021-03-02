import { UserDetailModel } from './../userdetail/userdetail.model';
import { ViewUserService } from './../services/viewModal/view-user.service';
import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.scss'],
})
export class ViewUserDetailComponent implements OnInit {
  //@Input() user: UserViewModel[]=[];
users:UserDetailModel[] = [];
showModal=false;
searchText: string;

  constructor(private router:Router, private viewUserService: ViewUserService) { }

  ngOnInit() {
  this.users = this.viewUserService.userDetailHandler();

    }
  }


   

