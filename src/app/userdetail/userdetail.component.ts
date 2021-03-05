import  Swal  from 'sweetalert2';
import { map } from 'rxjs/operators';
import { UserService } from './../services/user.service';
import { UserData } from 'src/app/models/user-data.model';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss'],
})
export class UserdetailComponent implements OnInit{

  @Output() refreshList: EventEmitter<any> = new EventEmitter();
userData:UserData={
  name: '',
address: '',
number: 0,
text: ''
};

  constructor(private userService: UserService,
    private _Activatedroute:ActivatedRoute,
    private router: Router
  ) { }

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
        let userId = +this._Activatedroute.snapshot.params['id'];
        //console.log(data[userId])
        this.userData = data[userId]
      });
      
    }
    
    deleteUserData(): void {
      if (this.userData.key) {
        Swal.fire({
          title: 'Do you want to delete this data?',
          showDenyButton: true,
          confirmButtonText: `Yes`
        }).then((result) => {
        
          if (result.isConfirmed) {

            Swal.fire('Deleted!', '', 'success')
            this.userService.deleteUser(this.userData.key)
            .then(() => {
              this.refreshList.emit();
            })
            .catch(err => console.log(err));
            this.router.navigateByUrl('/viewuser')
          } 
          else if (result.isDenied) {
            Swal.fire('Changes are not saved','', 'info')
          }
        })


      }
    }
}
