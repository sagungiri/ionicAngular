import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { UserData } from '../models/user-data.model';
@Component({
  selector: 'app-add-user-detail',
  templateUrl: './add-user-detail.component.html',
  styleUrls: ['./add-user-detail.component.scss'],
})



export class AddUserDetailComponent implements OnInit {
  userData: UserData = new UserData();
  submitted = false;
  isLoading= false;
  config = {
    placeholder: '',
    tabsize: 2,
    height: '200px',
    toolbar: [
        ['misc', ['codeview', 'undo', 'redo']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
        ['fontsize', ['fontname', 'fontsize', 'color']],
        ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
        ['insert', ['table', 'picture', 'link', 'video', 'hr']]
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
  }

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private userService:UserService) {
  }

  ngOnInit() {

  }

  // addUserDetailHandler(name, address, number, text) {

  //   if (name.length == '' && address.length == '' && number.length <= 9) {
  //     return false;
  //   }
  //   else {
  //     this.isLoading= true;
  //   this.loadingCtrl.create({keyboardClose:true, message:'Getting Your Data Ready....'})
  //     .then(loadingEl=>{
  //       loadingEl.present();
  //       setTimeout(()=>{
  //         this.isLoading= false;
  //         loadingEl.dismiss();
  //       }, 2000);
  //     })
  //     this.http.post(this.url, {
  //       name: name,
  //       address: address,
  //       number: number,
  //       text: text
  //     }).subscribe(res => console.log(res));
  //     this.router.navigateByUrl('/');
  //     Swal.fire({
  //       position: 'center',
  //       icon: 'success',
  //       title: 'Please Login To Proceed',
  //       showConfirmButton: false,
  //       timer: 2000
  //     });
  //   }
  // }
  addUserDetail(): void {
    this.isLoading= true;
      this.loadingCtrl.create({keyboardClose:true, message:'Getting Your Data Ready....'})
        .then(loadingEl=>{
          loadingEl.present();
          setTimeout(()=>{
            this.isLoading= false;
            loadingEl.dismiss();
          }, 2000);
        });
    this.userService.create(this.userData).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
    
    this.router.navigateByUrl('/');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Please Login To Proceed',
      showConfirmButton: false,
      timer: 2000
    });
  }

}
