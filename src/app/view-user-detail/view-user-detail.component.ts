import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { UserData } from '../models/user-data.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.scss'],
})
export class ViewUserDetailComponent implements OnInit {

userData?: UserData[];
searchText: string;

  constructor(private router:Router, private userService: UserService) { }

  ngOnInit() {
 this.retrieveUsersData();

    }
    retrieveUsersData(): void {
      this.userService.getAllUser().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
        this.userData = data;
      });
    }
  }


   

