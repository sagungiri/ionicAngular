import { map } from 'rxjs/operators';
import { UserService } from './../services/user.service';
import { UserData } from 'src/app/models/user-data.model';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss'],
})
export class UserdetailComponent implements OnInit{

userData:UserData={
  name: '',
address: '',
number: 1,
text: ''
};
currentUserData:any;


  constructor(private userService: UserService,
    private _Activatedroute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.retrieveUsersData();
    } 
    retrieveUsersData(): void {
      this.userService.getAll().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
        let userId = +this._Activatedroute.snapshot.params['id'];
        //console.log(data[userId])
        this.userData = data[userId]
      });
      
    }
//console.log(this.viewModal)
// let userId = +this._Activatedroute.snapshot.params['id'];
// console.log('userId',userId)
// this.viewModal = this.viewUserService.getUserDetailById(userId);
// console.log('viewModal', this.viewModal)

}
