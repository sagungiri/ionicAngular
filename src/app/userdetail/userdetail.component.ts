import { LoadingController } from '@ionic/angular';
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

  showUpdateModal:boolean = false;
  isLoading=false;

  @Output() refreshList: EventEmitter<any> = new EventEmitter();
userData:UserData={
  name: '',
address: '',
number: 0,
text: ''
};

  constructor(private userService: UserService,
    private _Activatedroute:ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController
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

    forUpdatingUser(){
      this.isLoading= true;
      this.loadingCtrl.create({keyboardClose:true, message:'Getting Your Data Ready....'})
        .then(loadingEl=>{
          loadingEl.present();
          setTimeout(()=>{
            this.isLoading= false;
            loadingEl.dismiss();
          }, 500);
        });
      this.showUpdateModal = true;
      console.log('model')
    }
    updateUserData(): void {
      this.isLoading= true;
      this.loadingCtrl.create({keyboardClose:true, message:'Getting Your Data Ready....'})
        .then(loadingEl=>{
          loadingEl.present();
          setTimeout(()=>{
            this.isLoading= false;
            loadingEl.dismiss();
          }, 2000);
        });
      this.showUpdateModal = false;
      const data = {
        name: this.userData.name,
        address: this.userData.address,
        number: this.userData.number,
        text: this.userData.text
      };
  
      if (this.userData.key) {
        this.userService.updateUser(this.userData.key, data)
          .then(() => console.log('updated data', this.userData))
          .catch(err => console.log(err));
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Updated Successfully',
            showConfirmButton: false,
            timer: 2000
          });
      }
      
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
            this.router.navigateByUrl('/viewuser');
            this.isLoading= true;
            this.loadingCtrl.create({keyboardClose:true, message:'Getting Your Data Ready....'})
              .then(loadingEl=>{
                loadingEl.present();
                setTimeout(()=>{
                  this.isLoading= false;
                  loadingEl.dismiss();
                }, 2000);
              });
          } 
          else if (result.isDenied) {
            Swal.fire('Changes are not saved','', 'info');
          }
        })


      }
    }


}
