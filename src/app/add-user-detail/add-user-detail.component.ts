import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user-detail',
  templateUrl: './add-user-detail.component.html',
  styleUrls: ['./add-user-detail.component.scss'],
})



export class AddUserDetailComponent implements OnInit {
  config = {
    placeholder: '',
    tabsize: 2,
    height: '200px',
    uploadImagePath: '/api/upload',
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

  url = 'https://fir-angular-dc1a1-default-rtdb.firebaseio.com/data.json'
  constructor(private http: Http,
    private router: Router) {
  }

  ngOnInit() {

  }

  addUserDetailHandler(name, address, number, text) {
    if (name.length == '' && address.length == '' && number.length < 5) {
      return false;
    }
    else {
      this.http.post(this.url, {
        name: name,
        address: address,
        number: number,
        text: text
      }).subscribe(res => console.log(res));
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

}
